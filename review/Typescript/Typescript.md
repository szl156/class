# TS简介

##  1、基本类型

- 类型声明

  - 语法：

    - ```typescript
      let a:number;
      
      let b:number=2;
      
      function fn(a:number,b:number):number{
          ...
      }
      ```

- 类型：

|    类型     |      例子       |              描述              |
| :---------: | :-------------: | :----------------------------: |
| **number**  |   1\|-33\|2.5   |            任意数字            |
| **string**  | 'hi'\|"hi"\|hi  |           任意字符串           |
| **boolean** |   true\|false   |             布尔值             |
|   字面量    |     其本身      |  限制变量的值就是该字面量的值  |
|     any     |        *        |            任意类型            |
|   unknown   |        *        |         类型安全的any          |
|    void     | 空值(undefined) |       没有值\|undefined        |
|    never    |     没有值      |          不能是任何值          |
|   object    |  {name:''傻蛋}  |          任意的JS对象          |
|    array    |     [1,2,3]     |           任意JS数组           |
|    tuple    |      [4,5]      | 元组，TS新增类型，固定长度数组 |
|    enum     |    enum{A,B}    |        枚举，TS新增类型        |

## 2.编译选项

- 编译文件

  - ```typescript
    tsc xxx.ts -w
    ```

- 编译项目

  - 使用`tsc` 命令的前提是项目根目录下创建tsconfig.json

  - tsconfig.json是一个JSON文件，添加配置文件后使用`tsc`命令完成对整个项目的编译

  - 配置选项：

    - include

      - 定义希望被编译文件所在目录

      - 示例：

        - ```json
          "include":["src/**/*","tests/**/*"]
          ```

        - 所有src目录和test目录下的文件都会被编译

    - exclude

      - 定义被排除在外的目录

      - 示例：

        - ```json
          "exclude":["./src/hello/**/*"]
          ```

        - 上述示例中，src下hello目录下的文件都不会被编译

    - extends

      - 定义被继承的配置文件

      - 示例

         - ```json
           "extends":"./config/base"
           ```

         - 表示当前配置文件中会自动包含config下base.json中的所有配置信息

# 面对对象

## 1、类（class）

- 定义：

  - ```typescript
    class 类名{
    	属性名：类型；
    	constructor(参数:类型){
    		this.属性名=参数;
    	}
    	方法名(){
    		...
    	}
    }
    ```

    