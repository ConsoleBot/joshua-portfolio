import './Ash.scss';

function Ash() {
    var dom_content = [];
    for (var i = 0; i < 100; i++) {
        dom_content.push(
            (
              <div className="circle-container" key={i}>
                <div className="circle">
                </div>
              </div>
            )
        );
    }

   return   <div className='fixed h-full w-full z-[999] pointer-events-none'>
              {dom_content}
            </div>
}

export default Ash;