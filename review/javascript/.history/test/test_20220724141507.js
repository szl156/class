class Arithmetic { //定义算法类
    add(a, b) {
        return a + b
    }
    sub(a, b) {
        return a - b
    }
    mul(a, b) {
        return a * b
    }
    div(a, b) {
        return a / b
    }
}

class Computed extends Arithmetic {
    constructor() {
            super();
            this.result = document.getElementsByClassName('result')[0]; //获取结果dom
            this.ipt1 = document.getElementsByClassName('ipt1')[0]; //获取输入框
            this.ipt2 = document.getElementsByClassName('ipt2')[0];
            this.btnGroup = document.getElementsByClassName('btnGroup')[0];
            this.btnItems = this.btnGroup.getElementsByTagName('button');
            this.data = this.defineData();
            this.btnIndex = 0; //记录选中btn索引
        }
        // 1.进行初始化
    init() {
        this.bindEvent();
    }

    // 2.绑定事件
    bindEvent() {
        this.btnGroup.addEventListener('click', this.onFieldBtnClick.bind(this), false)
        this.ipt1.addEventListener('input', this.onNumberIpt.bind(this), false)
        this.ipt2.addEventListener('input', this.onNumberIpt.bind(this), false)
    }

    // 6.使用Object.defineProperty进行数据劫持
    defineData() {
        let _obj = {},
            field = 'add', //保存计算方法字段
            fNumber = 0, //inp1的value
            sNumber = 0; //inp2的value
        let that = this;
        // 进行数据劫持
        Object.defineProperties(_obj, {
            fNumber: {
                get() {
                    return fNumber
                },
                set(newVal) {
                    fNumber = newVal
                        // 重点:在fNumber改变之后计算结果，此处vue使用的是Dom diff算法
                    that.computedResult(fNumber, sNumber, field);
                }
            },
            sNumber: {
                get() {
                    return sNumber
                },
                set(newVal) {
                    sNumber = newVal
                    that.computedResult(fNumber, sNumber, field);
                }
            },
            field: {
                get() {
                    return field
                },
                set(newVal) {
                    field = newVal
                    that.computedResult(fNumber, sNumber, field);
                }
            }
        })
        return _obj
    }

    // 3.btn点击事件
    onFieldBtnClick(ev) {
        let e = ev || window.event,
            tar = e.target || e.srcElement,
            tarName = tar.tagName.toLowerCase();
        tarName === 'button' && this.update(tar);
    }

    // 4.btn进行选项卡切换并更改field
    update(target) {
        this.btnItems[this.btnIndex].className = '';
        this.btnIndex = [].indexOf.call(this.btnItems, target);
        target.className += ' active';
        this.data.field = target.getAttribute('data-field');
    }

    // 5.ipt改变(input)事件
    onNumberIpt(ev) {
        let e = ev || window.event,
            tar = e.target || e.srcElement,
            className = tar.className,
            val = Number(tar.value.replace(/\s+/g, '')) || 0; //去除input的空格
        switch (className) {
            case 'ipt1':
                // 改变fNumber触发set()将重新计算结果
                this.data.fNumber = val;
                break;
            case 'ipt2':
                // 改变sNumber触发set()将重新计算结果
                this.data.sNumber = val;
                break;
            default:
                break;
        }
    }

    // 7.使用继承算法类的方法进行结果计算
    computedResult(fNumber, sNumber, field) {
        this.result.innerHTML = this[field](fNumber, sNumber)
    }
}

new Computed().init();