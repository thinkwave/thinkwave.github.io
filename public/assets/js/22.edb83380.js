(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{504:function(s,e,a){"use strict";a.r(e);var t=a(4),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"q-type-인스턴스-사용-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-type-인스턴스-사용-방법"}},[s._v("#")]),s._v(" Q-Type 인스턴스 사용 방법")]),s._v(" "),a("ol",[a("li",[s._v("인스턴스 생성 사용")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('QUser qUser = new QUser("user");\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("기본 인스턴스 사용")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("QUser qUser = QUser.user;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"조인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#조인"}},[s._v("#")]),s._v(" 조인")]),s._v(" "),a("p",[s._v("join(inner join), left join. right join 을 지원 한다.\n메소드 사용방법은 join(조인칼럼, Q타입)으로 사용한다.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('List<User> users = queryFactory\n    .selectFrom(user)\n    .join(user.dept, dept)\n    .where(dpet.name.eq("dept1"))\n    .fetch();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"조인-on-절"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#조인-on-절"}},[s._v("#")]),s._v(" 조인 On 절")]),s._v(" "),a("p",[s._v("조인 되는 테이블을 필터링할때 사용")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('List<Tuple> result = queryFactory\n    .select(user, dept)\n    .form(user)\n    .leftJoin(user.dept, dept)\n    .on(dept.name.eq("dept1"))\n    .fetch();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"fetch-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch-join"}},[s._v("#")]),s._v(" fetch join")]),s._v(" "),a("p",[a("code",[s._v("fetchJoin()")]),s._v(" 메소드를 사요하면 query에서 join으로 테이블의 정보를 한번게 가져올 수 있다.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("User user = queryFactory\n    .selectFrom(user)\n    .join(user.dept, dept).fetchJoin()\n    .where(user.id.eq(123))\n    .fetchOne();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("blockquote",[a("p",[s._v("PersistenceUnitUtil로 dept가 가져 왔는지 확인 가능\nboolean loaded = emf.getPersistenceUnitUtil().isLoaded(user.getDept());\nassertThat(loaded).isTrue();")])]),s._v(" "),a("h1",{attrs:{id:"query에서-where-사용-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query에서-where-사용-방법"}},[s._v("#")]),s._v(" Query에서 Where 사용 방법")]),s._v(" "),a("p",[s._v(".and 연산자를 연결하여 사용하는 방법과, 파라미터로 전달하여 사용하는 방법이 있습니다.")]),s._v(" "),a("h2",{attrs:{id:"and-연산자-연결"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#and-연산자-연결"}},[s._v("#")]),s._v(" .and 연산자 연결")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('List<User> users = queryFactory\n    .selectFrom(user)\n    .where(user.username.eq("user1")\n        .and(user.age.eq(30))\n    ).fetch();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"파라미터로-전달"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#파라미터로-전달"}},[s._v("#")]),s._v(" 파라미터로 전달")]),s._v(" "),a("p",[s._v("파라미터로 전달된 값 중 null 값은 무시하기 때문에 동적 쿼리를 만들때 유용합니다.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('List<User> users = queryFactory\n    .selectFrom(user)\n    .where(user.username.eq("user1"),\n        user.qge.eq(30)\n    ).fetch();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"검색-조건-쿼리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#검색-조건-쿼리"}},[s._v("#")]),s._v(" 검색 조건 쿼리")]),s._v(" "),a("h3",{attrs:{id:"number-비교-연산자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number-비교-연산자"}},[s._v("#")]),s._v(" Number 비교 연산자")]),s._v(" "),a("ol",[a("li",[s._v("age <= 30"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("user.age.loe(30);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("age < 30"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" user.age.lt(30);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("age >= 30"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("user.age.got(30);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("age > 30"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("user.age.gt(30);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"equal-비교-연산자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#equal-비교-연산자"}},[s._v("#")]),s._v(" Equal 비교 연산자")]),s._v(" "),a("ol",[a("li",[s._v("username == 'user1'"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('user.username.eq("user1")\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("username != 'user1'"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('user.username.eq("user1").not()\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("username != 'user1'"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('user.username.ne("user1")\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("username != null"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("user.username.isNotNull()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"범위-비교-연산자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#범위-비교-연산자"}},[s._v("#")]),s._v(" 범위 비교 연산자")]),s._v(" "),a("ol",[a("li",[s._v("age between 30 and 35"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("user.age.between(30, 35)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("age in(30, 31, 32, 33, 34, 35)"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("user.age.in(30, 31, 32, 33, 34, 35)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("age not in( 30, 31, 32, 33, 34, 35)"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("user.age.notin(30, 31, 32, 33, 34, 35 )\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"기타-비교-연산자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기타-비교-연산자"}},[s._v("#")]),s._v(" 기타 비교 연산자")]),s._v(" "),a("ol",[a("li",[s._v("like 'user%'\n"),a("code",[s._v("user")]),s._v("로 시작하는 username 모두 검색"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('user.username.like("user%)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("like 'user%'"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('user.username.startWith("user")\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("like '%user%'"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('user.username.contains("user")\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"정렬"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#정렬"}},[s._v("#")]),s._v(" 정렬")]),s._v(" "),a("p",[s._v("ordryBy 메소드로 정렬할 수 있으며, 파라미터를 전달 하여 정렬 순서를 정할 수 있다.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("List<User> users = queryFactory\n    .selectFrom(user)\n    .where(user.age.goe(30))\n    .orderBy(user.age.asc, user.username.desc().nullsLast())\n    .fetch();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"페이징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#페이징"}},[s._v("#")]),s._v(" 페이징")]),s._v(" "),a("p",[a("code",[s._v("offset")]),s._v("과 "),a("code",[s._v("limit")]),s._v("로 페이징을 할 수 있다. "),a("code",[s._v("offset")]),s._v("은 0 부터 시작하는 페이지 이고 "),a("code",[s._v("limit")]),s._v("는 한 페이지에서 몇 건을 읽어 올지를 지정한다.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("List<User> users = queryFactory\n    .selectFrom(user)\n    .orderBy(user.age.asc())\n    .offset(1)  // 2 페이지\n    .limit(20)  // 20건\n    .fetch();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"group-by"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#group-by"}},[s._v("#")]),s._v(" group by")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("List<Tubple> result = queryFactory\n    .select(dept.name, user.age.avg())\n    .from(user)\n    .join(user.dept, dept)\n    .groupBy(dept.name)\n    .fetch();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h1",{attrs:{id:"결과-조회"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#결과-조회"}},[s._v("#")]),s._v(" 결과 조회")]),s._v(" "),a("h2",{attrs:{id:"fetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[s._v("#")]),s._v(" fetch")]),s._v(" "),a("h3",{attrs:{id:"fetchone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetchone"}},[s._v("#")]),s._v(" fetchOne()")]),s._v(" "),a("p",[s._v("한 건 조회할때 사용하며, 결과가 없으면 null을 반한하고 조회 결과가 2건 이상이면 예외 발생한다.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('User user = queryFactory\n    .selectFrom(user)\n    .where(user.username.eq("user1"))\n    .fetchOne();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"fetchfirst"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetchfirst"}},[s._v("#")]),s._v(" fetchFirst()")]),s._v(" "),a("p",[a("code",[s._v("fetchOne()")]),s._v("과 동일하지만 limit 구문을 붙여야 한다.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('User user = queryFactory\n    .selectFrom(user)\n    .where(user.username.eq("user1))\n    .fetchFirst();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"fetch-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch-2"}},[s._v("#")]),s._v(" fetch()")]),s._v(" "),a("p",[s._v("리스트를 조회하고 데이터가 없으면 빈 리스트를 리턴 한다.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("List<User> users = queryFactory\n    .selectFrom(user)\n    .fetch();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"fecthresults"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fecthresults"}},[s._v("#")]),s._v(" fecthResults()")]),s._v(" "),a("p",[s._v("조회 결과 반환되는 QueryResults에 페이징 정보를 포함한다.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("QueryResults<User> users = queryFactory\n    .selectFrom(user)\n    .fetchResults();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"fetchcount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetchcount"}},[s._v("#")]),s._v(" fetchCount()")]),s._v(" "),a("p",[s._v("조회 결과 row의 갯수인 count로 반환된다.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("long count = queryFactory\n    .selectFrom(user)\n    .fetchCount();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h1",{attrs:{id:"sub-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sub-query"}},[s._v("#")]),s._v(" Sub Query")]),s._v(" "),a("p",[a("code",[s._v("JPAExpressios")]),s._v("을 사용하여 서브쿼리를 구현할 수 있다.\n동일한 테이블을 조회 하는 경우는 QType의 이름을 다르게 지정해야 한다")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('QUser userSub = new QUser("userSub");\n\nList<User> users = queryFactory\n    .selectFrom(user)\n    .where(user.age.eq(\n        JPAExpressions\n            .select(userSub.age.avg())\n            .from(userSub)\n    ))\n    .fetch();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("blockquote",[a("p",[s._v("where절에서만 서브쿼리 사용 가능")])]),s._v(" "),a("h1",{attrs:{id:"case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case"}},[s._v("#")]),s._v(" Case")]),s._v(" "),a("p",[s._v("select 절에서 case 문을 사용하는 방법을 알아 보자. when, then, otherwise 메소드를 체이닝해수 사용한다.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('List<String> ageStr = queryFactory\n    .select(user.age\n        .when(31).then("서른하나")\n        .when(32).then("서른둘")\n        .otherwise("비밀")\n    )\n    .from(user)\n    .fetch();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h1",{attrs:{id:"alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alias"}},[s._v("#")]),s._v(" alias")]),s._v(" "),a("p",[s._v("칼럼명에 alias를 주는 방법을 알아 보자")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('List<Tuple> result = queryFactory\n    .select(user.username, Expressions.constant("RENAME"))\n    .from(user)\n    .fetch();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h1",{attrs:{id:"문자-합치기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#문자-합치기"}},[s._v("#")]),s._v(" 문자 합치기")]),s._v(" "),a("p",[s._v("select에서 칼럼을 합치는 방법을 알아 보자.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('String concatResult = queryFactory\n    .select(\n        user.username.concat("-").concat(user.age.stringValue())\n    )\n    .from(user)\n    .where(user.id.eq(123L))\n    .fetchOne();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);