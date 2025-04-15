import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Button, Input, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Card, CardContent, CardHeader, CardTitle, Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui";
import axios from "axios";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Form validation schema with Zod
const formSchema = z.object({
  video: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Please upload a video file")
    .refine((files) => files[0]?.type.startsWith("video/"), "File must be a video"),
  query: z.string().min(5, "Query must be at least 5 characters").max(100, "Query must be less than 100 characters"),
});

// Type for API response
interface ApiResponse {
  moment_retrieval: [string, string, number][];
  highlight_detection: { x: number; y: number }[];
}

const Demo = () => {
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  // Initialize form with React Hook Form and Zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      video: undefined,
      query: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    const formData = new FormData();
    formData.append("video", values.video[0]);
    formData.append("query", values.query);

    try {
      const res = await axios.post("https://misbahkhan-r2-tuning.hf.space/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResponse(res.data);
    } catch (err: any) {
      setError(err.response?.data?.detail || "An error occurred while processing the request.");
    } finally {
      setLoading(false);
    }
  };

  // Chart data for highlight_detection
  const chartData = response?.highlight_detection
    ? {
        labels: response.highlight_detection.map((point) => point.x),
        datasets: [
          {
            label: "Saliency Score",
            data: response.highlight_detection.map((point) => point.y),
            borderColor: "#2B6B5A",
            backgroundColor: "rgba(43, 107, 90, 0.2)",
            fill: true,
            tension: 0.3,
          },
        ],
      }
    : null;

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Highlight Detection" },
    },
    scales: {
      x: { title: { display: true, text: "Time (seconds)" } },
      y: { title: { display: true, text: "Saliency Score" } },
    },
  };

  // Add this function to handle video preview
  const handleVideoChange = (files: FileList | null) => {
    if (files && files[0]) {
      const file = files[0];
      const videoUrl = URL.createObjectURL(file);
      setVideoPreview(videoUrl);
      form.setValue("video", files);
    }
  };

  // Add cleanup for video preview URL
  useEffect(() => {
    return () => {
      if (videoPreview) {
        URL.revokeObjectURL(videoPreview);
      }
    };
  }, [videoPreview]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-5xl mx-auto p-6 mt-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#2B6B5A]">Moment Retrival Demo</h1>

      {/* Form */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Upload Video and Query</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="video"
                render={({ field: { onChange, value, ...rest } }) => (
                  <FormItem>
                    <FormLabel>Video</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="video/*"
                        onChange={(e) => {
                          handleVideoChange(e.target.files);
                        }}
                        {...rest}
                      />
                    </FormControl>
                    {videoPreview && (
                      <div className="mt-4 rounded-lg overflow-hidden bg-gray-100">
                        <video src={videoPreview} controls className="w-full max-h-[400px] object-contain">
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Text Query (5-15 words)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a descriptive sentence..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Processing..." : "Submit"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Error Message */}
      {error && <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">{error}</div>}

      {/* Results */}
      {response && (
        <div className="space-y-6">
          {/* Moment Retrieval Table */}
          <Card>
            <CardHeader>
              <CardTitle>Moment Retrieval</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Start Time</TableHead>
                    <TableHead>End Time</TableHead>
                    <TableHead>Score</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {response.moment_retrieval.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{row[0]}</TableCell>
                      <TableCell>{row[1]}</TableCell>
                      <TableCell>{row[2]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Highlight Detection Graph */}
          {chartData && (
            <Card>
              <CardHeader>
                <CardTitle>Highlight Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <Line data={chartData} options={chartOptions} />
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Demo;
