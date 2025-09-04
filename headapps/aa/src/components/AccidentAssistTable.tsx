/* eslint-disable prettier/prettier */
interface TableRow {
  feature: string;
  aa: string;
  insurers: string;
}

interface AccidentAssistTableProps {
  heading: string; // dynamic heading
  columns: [string, string]; // dynamic column headers
  tableData: TableRow[]; // dynamic table rows
}

export default function AccidentAssistTable({
  heading,
  columns,
  tableData,
}: AccidentAssistTableProps) {
  return (
    <div className="bg-white">
      {/* Section Heading */}
      <div className="md:py-[1.5rem] py-[1rem]">
        <div className="max-w-[1160px] mx-auto md:px-[2rem] px-[1rem]">
          <div className="xl:pt-[2.9rem] xl:pb-[3.1rem] py-[1.5rem] px-[1rem] md:px-[2rem]">
            <h3 className="text-center md:!text-[1.9rem] !text-[2rem] xl:!text-[2.6rem] m-0 xl:!leading-[3.6rem] md:!leading-[2.5rem] !leading-[2.7rem] tracking-[-0.005em] !font-newtransort !font-light">
              {heading}
            </h3>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="md:py-[1.5rem] py-[1rem]">
        <div className="overflow-x-auto max-w-[1160px] mx-auto md:px-[2rem]">
          <div className="xl:mt-[7.9rem] xl:mb-[4rem] md:mt-[3.35rem] md:mb-[1.9rem] my-[2rem]">
            <table className="min-w-full table-fixed border-collapse">
              <thead>
                <tr>
                  {/* Feature header (empty) */}
                  <th className="!px-[1.5rem] !py-[2.5rem] font-semibold border-t !border-b border-r !border-gray-200 text-left w-[250px]">
                    {/* Empty */}
                  </th>
                  {/* Dynamic Column Headers */}
                  {columns.map((col, index) => (
                    <th
                      key={index}
                      className="xl:!px-[1.5rem] xl:!py-[2.5rem] !px-[1.5rem] !py-[2.5rem] md:!px-[1.5rem] md:!pt-[2.5rem] md:!pb-[2.8rem] border border-white align-middle text-center w-[127px] bg-[#fc0] text-black"
                    >
                      <h5 className="m-0 !text-[1.8rem] md:!text-[1.5rem] xl:!text-[1.6rem] md:!leading-[3.9rem] xl:!leading-[2.2rem] leading-[2.5rem] !tracking-[0px] !font-newtransport !font-bold">
                        {col}
                      </h5>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {tableData.map((row, idx) => (
                  <tr key={idx}>
                    {/* Feature column */}
                    <td
                      className="relative xl:font-bold font-semibold border-t !border-b border-r !border-gray-200 align-top
                      px-[2rem] py-[1.8rem] pr-[4rem] pb-[1.9rem] 
                      xl:px-[3rem] xl:pr-[6rem] md:pr-[4rem] xl:pt-[1.9rem] xl:pb-[1.8rem] md:pl-[2.2rem] md:pt-[1.9rem] md:pb-[1.95rem]"
                    >
                      <p className="m-0 xl:!text-[14px] !text-[1.38rem] md:!text-[1.3rem] !tracking-[.001em] xl:!leading-[21px] md:!leading-[2rem] !leading-[1.95rem] xl:font-bold">
                        {row.feature}
                      </p>
                    </td>

                    {/* AA and Insurers columns */}
                    <td
  className={`pt-[0.8rem] pb-[0.9rem] !px-[1.5rem] border border-gray-200 align-middle text-center
    ${idx % 2 !== 0 ? 'bg-white' : 'bg-gray-100'}
    relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[5px] after:!shadow-[0_10px_10px_rgba(192,195,195,0.7)] after:rounded-b-md
  `}
>
                      <p className="m-0 !text-[1.35rem] xl:!text-[15px] !leading-[1.9rem] !tracking-[0px]">
                        {row.aa}
                      </p>
                    </td>

                    <td
  className={`pt-[0.8rem] pb-[0.9rem] !px-[1.5rem] border border-gray-200 align-middle text-center
    ${idx % 2 !== 0 ? 'bg-white' : 'bg-gray-100'}
    relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[5px] after:shadow-[0_5px_10px_rgba(192,195,195,0.7)] after:rounded-b-md
  `}
>
                      <p className="m-0 !text-[1.35rem] xl:!text-[15px] !leading-[1.9rem] !tracking-[0px]">
                        {row.insurers}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

