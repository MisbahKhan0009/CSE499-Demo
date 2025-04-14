// Basic UI components implementation
export const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
);

export const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${className}`}
    {...props}
  />
);

export const Table = ({ children, className = "", ...props }) => (
  <table className={`w-full ${className}`} {...props}>
    {children}
  </table>
);

export const TableHeader = ({ children, ...props }) => (
  <thead className="bg-gray-50" {...props}>
    {children}
  </thead>
);

export const TableBody = ({ children, ...props }) => (
  <tbody {...props}>{children}</tbody>
);

export const TableRow = ({ children, className = "", ...props }) => (
  <tr className={`border-b ${className}`} {...props}>
    {children}
  </tr>
);

export const TableHead = ({ children, className = "", ...props }) => (
  <th
    className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}
    {...props}
  >
    {children}
  </th>
);

export const TableCell = ({ children, className = "", ...props }) => (
  <td className={`px-6 py-4 whitespace-nowrap ${className}`} {...props}>
    {children}
  </td>
);

export const Card = ({ children, className = "", ...props }) => (
  <div
    className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`px-6 py-4 border-b ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, className = "", ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = "", ...props }) => (
  <h3 className={`text-xl font-semibold ${className}`} {...props}>
    {children}
  </h3>
);

export const Form = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export const FormField = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export const FormItem = ({ children, className = "", ...props }) => (
  <div className={`space-y-2 ${className}`} {...props}>
    {children}
  </div>
);

export const FormLabel = ({ children, className = "", ...props }) => (
  <label
    className={`block text-sm font-medium text-gray-700 ${className}`}
    {...props}
  >
    {children}
  </label>
);

export const FormControl = ({ children, ...props }) => (
  <div className="mt-1" {...props}>
    {children}
  </div>
);

export const FormMessage = ({ children, className = "", ...props }) => (
  <p className={`text-sm text-red-600 ${className}`} {...props}>
    {children}
  </p>
);