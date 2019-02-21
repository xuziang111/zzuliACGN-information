let index = Vue.component('index',{
    template:`
    <div>
         <div class="left-side">
                        <div>
                                <div id="top-carousel" class="carousel slide" data-ride="carousel">
                                        <!-- Indicators -->
                                        <ol class="carousel-indicators">
                                          <li data-target="#top-carousel" data-slide-to="0" class="active"></li>
                                          <li data-target="#top-carousel" data-slide-to="1"></li>
                                          <li data-target="#top-carousel" data-slide-to="2"></li>
                                        </ol>
                                      
                                        <!-- Wrapper for slides -->
                                        <div class="carousel-inner" role="listbox">
                                          <div class="item active">
                                            <img src="./Images/66474729_p0.jpg" alt="...">
                                            <div class="carousel-caption">
                                              ...
                                            </div>
                                          </div>
                                          <div class="item">
                                            <img src="./Images/8c007b5cgy1fqwefu5tkrj20xc0nkqv5.jpg" alt="...">
                                            <div class="carousel-caption">
                                              ...
                                            </div>
                                          </div>
                                          <div class="item">
                                                <img src="./Images/8c007b5cly1fkayrbqu9sj216b0ovke1.jpg" alt="...">
                                                <div class="carousel-caption">
                                                  ...
                                                </div>
                                              </div>
                                        </div>
                                      </div>
                        </div>
                        <div class="partition-name"><h3>推荐文章</h3></div>
                        <div class="article-content">
                            <section class="article">
                                <div class="article-left">
                                    <h4 class="article-tittle">xxx</h4>
                                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                    <div class="article-inf"><span>来源：xxxxx</span><span>分类</span><span>2019-02-20</span></div>
                                </div>
                                <div class="article-right"><img src="/Images/66474729_p0.jpg" width="120" height="90"></div>
                            </section>
                            <section class="article">
                                    <div class="article-left">
                                        <h4 class="article-tittle">xxx</h4>
                                        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                        <div class="article-inf"><span>来源：xxxxx</span><span>分类</span><span>2019-02-20</span></div>
                                    </div>
                                    <div class="article-right"><img src="/Images/66474729_p0.jpg" width="120" height="90"></div>
                                </section>
                            <div>xxxxxx</div>
                        </div>
                    </div>
         <aside class="right-side">
                        <div>
                            <h4>热点</h4>
                            <hr>
                            <ul>
                                <li><a href="#">文章111111111111111</a><span>2-19</span></li>
                                <li><a href="#">文章2</a><span>2-19</span></li>  
                                <li><a href="#">文章3</a><span>2-19</span></li>  
                                <li><a href="#">文章4</a><span>2-19</span></li>  
                                <li><a href="#">文章5</a><span>2-19</span></li>  
                                <li><a href="#">文章6</a><span>2-19</span></li>   
                              </ul>
                        </div>
                    </aside>
    </div>
    `
})