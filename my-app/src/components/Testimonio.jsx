import React from "react";

const Testimonio = () => {
    return (
        <>
        <div className="w100 pt-5 pt-5-xs mb-5 mt-5 animated fadeIn ">
            <div class="flex around position-relative">
              <a class="btn-floating position-absolute left3" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left arrow"></i></a>
              <a class="btn-floating position-absolute  right3" href="#multi-item-example" data-slide="next"><i class="fas fa-chevron-right arrow"></i></a>
          </div>
          <span className="p-4 flex flexCenter text-size27"><b>TESTIMONIOS</b></span>
            <div class="container my-4">
              <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="mb-2 flexWrap">
                          <div class="card-body pl-3 center">
                            <p class="card-text">Por tu compra en Diamante Perú obtienes:</p>
                            <p className="interline1 text-size12">
                              Luis Riva
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="mb-2  flex flexWrap">
                          <div class="card-body pl-3 center">
                            <p class="card-text">Por tu compra en Diamante Perú obtienes:</p>
                            <p className="interline1 text-size12">
                                Juan Soto
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
        </div>
        </>
    )
}
export default Testimonio;