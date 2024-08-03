import React from "react";

const RightSection = (props) => {
    return (

        <div className="col-md-6">
            <div className="card card-timeline card-plain">
                <div className="card-body">
                    <ul className="timeline timeline-simple">
                        <li className="timeline-inverted">
                            <div className="timeline-badge danger">
                                <i className="now-ui-icons objects_planet"></i>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <span className="badge badge-danger">بعض العنوان</span>
                                </div>
                                <div className="timeline-body">
                                    <p>قدم أفضل وجبة يوم الأب على الإطلاق. ممتن جدا سعيد جدا حتى المباركة. شكراً لك على صنع عائلتي
                                    لقد استمتعنا بالموضوع "المستقبلي" !!! كانت ليلة ممتعة كل ذلك معا ... عرض كاني فظ دائما في
                                    الساعة 2 صباحا بيعت من مشاهير مشاهدة
                                </p>
                                </div>
                                <h6><i className="ti-time"></i>قبل 11 ساعة عبر تويتر</h6>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-badge success">
                                <i className="now-ui-icons shopping_tag-content"></i>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <span className="badge badge-success">واحدة أخرى</span>
                                </div>
                                <div className="timeline-body">
                                    <p> أيضًا الإشارة إلى أنه أول ألبوم ينتقل إلى رقم 1 من البث المباشر !!! أنا أحبك إلين وأيضا
                                    قاعدة بلدي رقم واحد تصميم أي شيء أفعله من الأحذية إلى الموسيقى إلى المنازل هو أن كيم يجب أن
                                    ترغب في ذلك
                                </p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-badge info">
                                <i className="now-ui-icons shopping_delivery-fast"></i>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <span className="badge badge-info">عنوان آخر</span>
                                </div>
                                <div className="timeline-body">
                                    <p>يسمى أنا أفتقد كاني القديم هذا كل ما كان كاني وأنا أحبك مثل كاني يحب كاني مشاهدة مشاهير @
                                    Figueroa و 12 في وسط المدينة LA 11:10 PM
                                </p>
                                    <p>ماذا لو قدمت كاني أغنية عن كاني رويير لا تصنع سرير الدب القطبي ولكن الأريكة الدببة القطبية
                                    هي قطعة الأثاث المفضلة لدينا التي نملكها. لم يكن أي مجموعة من Kanyes على أهدافه كاني
                                </p>
                                    <hr />
                                </div>
                                <div className="timeline-footer">
                                    <div className="dropdown">
                                        <button type="button" className="btn btn-round btn-info dropdown-toggle" data-toggle="dropdown">
                                            <i className="now-ui-icons design_bullet-list-67"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">عمل</a>
                                            <a className="dropdown-item" href="#">إجراء آخر</a>
                                            <a className="dropdown-item" href="#">شيء آخر هنا</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default RightSection;