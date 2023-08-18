import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import MainSidebar from "../../components/molecules/MainSidebar/MainSidebar";
import TopbarAdmin from "../../components/molecules/TopbarAdmin/TopbarAdmin";

const MasterRole = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* SIDEBAR */}
      <MainSidebar />
      {/* MAIN PAGE */}
      <div className="w-full flex flex-col overflow-x-hidden">
        <TopbarAdmin />
        <div className="h-full bg-slate-100 p-4 flex-col">
          {/* TABLE */}
          <div className="w-full">
            <div className="overflow-x-auto">
              <div className="sm:px-6 w-full">
                <div className="px-4 md:px-10 py-4 md:py-2">
                  <div className="flex items-center justify-between">
                    <Paragraph>Role Master</Paragraph>
                    {/* <p className="focus:outline-none text-base lg:text-2xl font-bold leading-normal text-gray-800">
                      Role Master
                    </p> */}
                    <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                      <p>Sort By:</p>
                      <select
                        aria-label="select"
                        className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
                        <option className="text-sm text-indigo-800">
                          Latest
                        </option>
                        <option className="text-sm text-indigo-800">
                          Oldest
                        </option>
                        <option className="text-sm text-indigo-800">
                          Latest
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="shadow-sm mt-2 bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 rounded-lg">
                  <div className="sm:flex items-center justify-between">
                    <div className="flex items-center">
                      <a className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800">
                        <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                          <p>All</p>
                        </div>
                      </a>
                      <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8">
                        <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                          <p>Done</p>
                        </div>
                      </a>
                      <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8">
                        <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                          <p>Pending</p>
                        </div>
                      </a>
                    </div>
                    <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                      <p className="text-sm font-medium leading-none text-white">
                        Add Task
                      </p>
                    </button>
                  </div>
                  {/* MAIN TABLE */}

                  <div className="mt-4 w-full overflow-x-auto rounded-md">
                    <table className="w-full">
                      <thead>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                          <th className="px-4 py-3">Name</th>
                          <th className="px-4 py-3">Age</th>
                          <th className="px-4 py-3">Status</th>
                          <th className="px-4 py-3">Date</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                  alt=""
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"></div>
                              </div>
                              <div>
                                <p className="font-semibold text-black">
                                  Sufyan
                                </p>
                                <p className="text-xs text-gray-600">
                                  Developer
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-ms font-semibold border">
                            22
                          </td>
                          <td className="px-4 py-3 text-xs border">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                              {" "}
                              Acceptable{" "}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm border">6/4/2000</td>
                        </tr>
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div className="relative w-8 h-8 mr-3 rounded-full">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                  alt=""
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"></div>
                              </div>
                              <div>
                                <p className="font-semibold text-black">
                                  Stevens
                                </p>
                                <p className="text-xs text-gray-600">
                                  Programmer
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-md font-semibold border">
                            27
                          </td>
                          <td className="px-4 py-3 text-xs border">
                            <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm">
                              {" "}
                              Pending{" "}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            6/10/2020
                          </td>
                        </tr>
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div className="relative w-8 h-8 mr-3 rounded-full">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                  alt=""
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"></div>
                              </div>
                              <div>
                                <p className="font-semibold">Nora</p>
                                <p className="text-xs text-gray-600">
                                  Designer
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-md font-semibold border">
                            17
                          </td>
                          <td className="px-4 py-3 text-xs border">
                            <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                              {" "}
                              Nnacceptable{" "}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            6/10/2020
                          </td>
                        </tr>
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div className="relative w-8 h-8 mr-3 rounded-full">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                  alt=""
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"></div>
                              </div>
                              <div>
                                <p className="font-semibold">Ali</p>
                                <p className="text-xs text-gray-600">
                                  Programmer
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 border text-md font-semibold">
                            23
                          </td>
                          <td className="px-4 py-3 border text-xs">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                              {" "}
                              Acceptable{" "}
                            </span>
                          </td>
                          <td className="px-4 py-3 border text-sm">
                            6/10/2020
                          </td>
                        </tr>
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div className="relative w-8 h-8 mr-3 rounded-full">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                  alt=""
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"></div>
                              </div>
                              <div>
                                <p className="font-semibold">Khalid</p>
                                <p className="text-xs text-gray-600">
                                  Designer
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 border text-md font-semibold">
                            20
                          </td>
                          <td className="px-4 py-3 border text-xs">
                            <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm">
                              {" "}
                              Pending{" "}
                            </span>
                          </td>
                          <td className="px-4 py-3 border text-sm">
                            6/10/2020
                          </td>
                        </tr>
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div className="relative w-8 h-8 mr-3 rounded-full">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                  alt=""
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"></div>
                              </div>
                              <div>
                                <p className="font-semibold">Nasser</p>
                                <p className="text-xs text-gray-600">
                                  Pen Tester
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 border text-md font-semibold">
                            29
                          </td>
                          <td className="px-4 py-3 border text-xs">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                              {" "}
                              Acceptable{" "}
                            </span>
                          </td>
                          <td className="px-4 py-3 border text-sm">
                            6/10/2020
                          </td>
                        </tr>
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div className="relative w-8 h-8 mr-3 rounded-full">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                  alt=""
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"></div>
                              </div>
                              <div>
                                <p className="font-semibold">Mohammed</p>
                                <p className="text-xs text-gray-600">
                                  Web Designer
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 border text-md font-semibold">
                            38
                          </td>
                          <td className="px-4 py-3 border text-xs">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                              {" "}
                              Acceptable{" "}
                            </span>
                          </td>
                          <td className="px-4 py-3 border text-sm">
                            6/10/2020
                          </td>
                        </tr>
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div className="relative w-8 h-8 mr-3 rounded-full">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                  alt=""
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"></div>
                              </div>
                              <div>
                                <p className="font-semibold">Saad</p>
                                <p className="text-xs text-gray-600">Data</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 border text-md font-semibold">
                            19
                          </td>
                          <td className="px-4 py-3 border text-xs">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                              {" "}
                              Acceptable{" "}
                            </span>
                          </td>
                          <td className="px-4 py-3 border text-sm">
                            6/10/2020
                          </td>
                        </tr>
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div className="relative w-8 h-8 mr-3 rounded-full">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                  alt=""
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"></div>
                              </div>
                              <div>
                                <p className="font-semibold">Sami</p>
                                <p className="text-xs text-gray-600">
                                  Developer
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 border text-md font-semibold">
                            21
                          </td>
                          <td className="px-4 py-3 border text-xs">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                              {" "}
                              Acceptable{" "}
                            </span>
                          </td>
                          <td className="px-4 py-3 border text-sm">
                            6/10/2020
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* PAGINATION */}
                    <div className="mt-5 bg-white border-t flex flex-row xs:flex-row items-center justify-between xs:justify-between">
                      <div className="space-x-1 flex items-center">
                        <span className="text-xs xs:text-sm text-gray-900 mt-2 mr-1">
                          Showing 1 to 4 of
                        </span>
                        <button className="text-xs xs:text-sm text-gray-900 mt-2 bg-slate-100 px-4 py-1 rounded-sm">
                          50
                        </button>
                      </div>

                      <div className="inline-flex mt-4 xs:mt-0">
                        <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                          Prev
                        </button>
                        <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterRole;
