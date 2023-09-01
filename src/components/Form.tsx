import React from 'react'

function Form() {
    return (
        <div className='flex items-center justify-center bg-[#313866] h-screen gap-10 w-screen max-md:flex-col max-md:relative'>

            <div className='w-1/3 items-start  text-center max-md:w-full pb-4 px-4'>
                <div className='font-bold text-[50px] text-center pb-10 text-[#FF2E63]'>Feedback Form</div>
                <div className='text-[#EAEAEA]'>Be honest and tell us your thought on how you think the proceedings for GraVITas can be made in any way. Feel free to talk about anyone in the senior core as well, all of this will be taken in good stride.</div>
            </div>
            <div className=''>
            <form action="https://docs.google.com/forms/d/e/1FAIpQLSeisCDax9LdBHmWGUnh-Xz0fnYY5ej5GAjBZI0PPwlAGeusag/formResponse?usp=pp_url&entry.505759770=name&entry.411696931=suggestions" 
                  className="bg-[#252A34] rounded px-1 lg:px-6 pt-6 pb-8 mb-4 max-md:px-8">
                <div className="mb-4">
                    <label className="block text-[#EAEAEA] text-sm font-bold mb-2" htmlFor="name">
                        Your name
                    </label>
                    <input
                        name="entry.505759770=name"
                        className="rounded  w-full md:w-50 lg:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="lol just kidding, leave this field empty"
                    />
                </div>
                <div className="mb-4">
                  <label className="block text-[#EAEAEA] text-sm font-bold mb-2">
                    Suggestions:
                  </label>
                  <textarea
                    name="entry.411696931=suggestions"
                    className="rounded w-full md:w-50 lg:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Be bitchy."
                    rows={4}
                  />
                </div>
                <div className="flex items-center justify-center">
                    <button
                      className="px-16 py-3 bg-[#EAEAEA] rounded-3xl justify-center items-center gap-2.5 inline-flex hover:bg-slate-300 focus:shadow-outline"
                      type="submit"
                    >
                       <div className="text-black text-base font-bold tracking-wide">
                            Submit
                       </div>
                    </button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Form;