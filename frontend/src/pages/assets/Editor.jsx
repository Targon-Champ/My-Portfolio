import React from 'react'

function Editor() {
    const data = [
        {
          skill_type: "'Programming Skills'",
          skills: [
            '"Python"',
            " , ",
            '"JavaScript"',
            " , ",
            '"C++"',
            " , ",
            '"SQL"',
          ],
        },
        {
          skill_type: "'Web Development'",
          skills: ['"Django"', " , ", '"React.js"', " , ", '"Tailwindcss"'],
        },
        {
          skill_type: "'Data & AI/ML'",
          skills: [
            '"Pandas"',
            " , ",
            '"Numpy"',
            " , ",
            '"Matplotlib"',
            " , ",
            '"Scikit-learn"',
            " , ",
            '"PyTorch"',
            ' , ',
            'TensorFlow'
          ],
        },
        {
          skill_type: "'Scripting Languages'",
          skills: ['"HTML/CSS"', ' , ','"Latex"']
        },
        {
          skill_type: "'Version Controlling Systems'",
          skills: ['"GIT"', " , ", '"ServiceNow Updatesets"', ' , ', "Docker"],
        },
        {
          skill_type: "'Tools'",
          skills: ['"GitHub"', " , ", '"ServiceNow"', " , ", '"Tableau"'],
        },
        {
          skill_type: "'ERP Systems'",
          skills: ['"SAP S/4HANA (Beginner)"', " , ", '"ServiceNow (HRSD/ITSM)"'],
        },
      ];
  return (
    <>
    <div className="flex flex-row">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#DDE5B6] to-[#A98467]"></div>
      <div className="h-[1px] w-full bg-gradient-to-r from-[#A98467] to-transparent"></div>
    </div>
    {/* code editor */}
    <div className="px-4 lg:px-8 py-5">
      <div className="flex flex-row space-x-2">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-orange-400"></div>
        <div className="h-3 w-3 rounded-full bg-[#23950A]"></div>
        <div className="h-3 w-full text-center relative">
          <span className="relative -top-1 text-sm">Profile.py</span>
        </div>
      </div>
    </div>
    <div className="overflow-hidden border-t-[2px] border-[#ADC178] px-4 lg:px-8 py-4 lg:py-8 ">

      <code className="font-mono text-xs md:text-sm lg:text-base">
        {/* Class Definition */}
        <div className="flex flex-row">
          <span className="mr-2 text-[#569CD6]">class</span>
          <span className="text-[#4EC9B0]">Profile</span>
          <span>:</span>
        </div>
        {/* def __init__(self): */}
        <div className="ml-3 lg:ml-6 flex flex-row">
          <span className="mr-2 text-[#569CD6]">def</span>
          <span className="text-[#DADADA]">__init__</span>
          <span className="flex flex-row text-[#FFD602]">
            (<p className="text-[#7F7F7F]">self</p>)
            <p className="text-[#DADADA]">:</p>
          </span>
        </div>
        {/* self.name = "Immani Sri Satya Sai" */}
        <div className="ml-6 lg:ml-12 flex flex-row">
          <span className="mr-2 text-[#DADADA]">self.name</span>
          <span className="mr-2 text-[#DADADA]">=</span>
          <span className="text-[#CE9178]">"Sri Satya Sai Immani"</span>
        </div>
        <div className="ml-6 lg:ml-12 flex flex-row">
          <span className="mr-2 text-[#DADADA]">self.work_experience_years</span>
          <span className="mr-2 text-[#DADADA]">=</span>
          <span className="text-[#B5CEA8]">2</span>
        </div>
        {/* self.skills = {*/}
        <div className="flex flex-row ml-6 lg:ml-12">
          <span className="mr-2 text-[#DADADA]">self.skills</span>
          <span className="mr-2 text-[#DADADA]">=</span>
          <span className="text-[#FFD602]">{"{"}</span>
        </div>
        {/* skills */}

        {data.map((data, index) => (
          <div key={index} className="ml-12 lg:ml-24">
            <span className="mr-2" id={index}>
              {data.skill_type}:
            </span>
            <span className="text-[#DA70D6]" id={0}>{"["}</span>
            {data.skills.map((skill, idx) => (
              <span className="text-[#CE9178]" id={idx}>
                {skill}
              </span>
            ))}
            <span className="text-[#DA70D6]" id={0}>{"]"}</span>
          </div>
        ))}
        <span className="text-[#FFD602] ml-6 lg:ml-12">{"}"}</span>

        {/* Company */}
        <div className="ml-3 lg:ml-6 flex flex-row">
          <span className="mr-2 text-[#569CD6]">def</span>
          <span className="text-[#DADADA]">companiesWorkedIn</span>
          <span className="flex flex-row text-[#FFD602]">
            (<p className="text-[#7F7F7F]">self</p>)
            <p className="text-[#DADADA]">:</p>
          </span>
        </div>
        <div className="flex flex-row ml-6 lg:ml-12">
          <span className="mr-2 text-[#569CD6]">return</span>
          <span className="text-[#FFD602]">{"["}</span>
          <span className="text-[#DA70D6] ">{"{"}</span>
          
        </div>
        <div className="ml-12 lg:ml-24">
            <span className="mr-2">
              'Company Name':
            </span>
            <span className="text-[#CE9178]" >
              "Deloitte USI"
            </span>
            <span className="text-[#DADADA]" >
              ,
            </span>
        </div>
        <div className="ml-12 lg:ml-24">
            <span className="mr-2">
              'Role':
            </span>
            <span className="text-[#CE9178]" >
              "XIN-III-Analyst, IT Application Dvlpmnt"
            </span>
        </div>

        <div className="ml-6 lg:ml-12"><span className="text-[#DA70D6]">{'}'}</span><span className="text-[#DADADA]">,</span></div>
        <span className="text-[#DA70D6] ml-6 lg:ml-12">{"{"}</span>
        <div className="ml-12 lg:ml-24">
            <span className="mr-2">
              'Company Name':
            </span>
            <span className="text-[#CE9178]" >
              "Case Western Reserve University"
            </span>
            <span className="text-[#DADADA]" >
              ,
            </span>
        </div>
        <div className="ml-12 lg:ml-24">
            <span className="mr-2">
              'Role':
            </span>
            <span className="text-[#CE9178]" >
              "Utech Technology Assistant"
            </span>
        </div>
        <div className="ml-6 lg:ml-12"><span className="text-[#DA70D6]">{'}'}</span><span className="text-[#FFD602]">{"]"}</span></div>
        
      </code>
    </div>
    <div className="flex flex-row">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#A98467] to-[#DDE5B6]"></div>
      <div className="h-[1px] w-full bg-gradient-to-r from-[#DDE5B6] to-transparent"></div>
    </div>
  </>
  )
}

export default Editor
