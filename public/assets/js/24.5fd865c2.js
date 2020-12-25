(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{506:function(s,n,e){"use strict";e.r(n);var a=e(4),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"동적-쿼리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#동적-쿼리"}},[s._v("#")]),s._v(" 동적 쿼리")]),s._v(" "),e("p",[s._v("다양한 조건에 따라 쿼리를 동적으로 만드는 방법을 설명합니다.\n주로 BooleanExpression으로 Where에 null인 경우 무시하는 방법을 사용합니다.")]),s._v(" "),e("h2",{attrs:{id:"booleanbuilder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#booleanbuilder"}},[s._v("#")]),s._v(" BooleanBuilder")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    public Page<Post> findByCategoryAndOpenTypeWithPaging(String category, String[] openTypes, String[] statuses, Pageable pageable) {\n        \n        QueryResults<Post> results = queryFactory\n                .selectFrom(post)\n                .where(\n                        eqCategory(category),\n                        inOpenType(openTypes),\n                        inStatus(statuses)\n                )\n                .orderBy(post.id.desc())\n                .offset(pageable.getOffset())\n                .limit(pageable.getPageSize())\n                .fetchResults();\n\n        return new PageImpl<>(results.getResults(),pageable,results.getTotal());\n    }\n\n    private BooleanExpression eqCategory(String category) {\n        if (StringUtils.isEmpty(category)) {\n            return null;\n        }\n        return post.category.eq(category);\n    }\n\n    private BooleanExpression inOpenType(String[] openTypes) {\n        if(openTypes == null || openTypes.length < 1) {\n            return null;\n        }\n        return post.openType.in(openTypes);\n    }\n\n    private BooleanExpression inStatus(String[] statuses) {\n        if(statuses == null || statuses.length < 1) {\n            return null;\n        }\n        return post.status.in(statuses);\n    }\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);