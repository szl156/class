$(function () {
    load()
// 按回车将数据存储到localStorage里
    $("#title").on("keydown", function (e) {
        if (e.keyCode === 13) {
            //获取初始数据
            let local = getData()
            //数据更新
            local.push({title: $(this).val(), done: false})
            saveData(local)
            //渲染数据
            load()
            $('input').val('')
        }
    })
    //删除元素
    $("ol,ul").on("click", "a", function () {
        let data = getData()
        let index = $(this).attr("id")
        data.splice(index, 1)
        saveData(data)
        load()
    })

    // 修改元素状态
    $("ol,ul").on("click", "input", function () {
        let data = getData()
        let index = $(this).siblings("a").attr("id")
        data[index].done = $(this).prop("checked")
        saveData(data)
        load()
    })

    //读取本地数据  本地数据均为string需使用 JSON.parse()转格式为对象
    function getData() {
        let data = localStorage.getItem('todolist')
        if (data !== null) {
            return JSON.parse(data)
        } else return []
    }

    //数据存储
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data))
    }

    // 数据渲染
    function load() {
        let data = getData()
        // 清空ol元素
        $("ol,ul").empty()
        // 遍历渲染
        let todoCount = 0
        let doneCount = 0
        $.each(data, function (i, n) {

            if (n.done === false) {
                $('ol').prepend("<li><input type='checkbox'><p>" + n.title + "</p><a id=" + i + " href='javascript:;'></a></li>")
                todoCount++
            } else {
                $('ul').prepend("<li><input type='checkbox' checked><p>" + n.title + "</p><a id=" + i + " href='javascript:;'></a></li>")
                doneCount++
            }
        })
        $("#todoCount").text(todoCount)
        $("#doneCount").text(doneCount)
    }

    // list删除
    function del() {
        $("ol").on("click", "a", function () {
            let data = getData()
            let index = $(this).attr("id")
        })
    }
})
