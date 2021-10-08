<template>
    <div class="quiz-page">
        <div class="quiz">
            <br>
            <div class="profile">
                kcn
            </div>
            <p>{{ username }}</p>
            <div class="levels">
                <Button Btnname="Easy" />
                <Button Btnname="medium" />
                <Button Btnname="difficult" />
            </div>
            <div class="counter">
                time: <span id="count">{{ counter }}</span>
            </div>
            <p> questions </p>
            <textarea name="input" id="" cols="35" rows="3" placeholder="Your answer here!" maxlength="5"></textarea>
            <div class="control">
                <Button Btnname="start" @click="start" />
                <Button Btnname="stop" @click="stop"/>
            </div>
            <div class="results">
                <p>results: <span id="result"></span></p>
                <p>trials: <span id="trial">{{ trial }}</span></p>
                <p>score: <span id="score"></span></p>
            </div>
            
        </div>
    </div>
</template>

<script>
import Button from "./Button.vue";
export default {
    name: "quiz",
    questions: "question",
    components: {
        Button
    },
    data () {
        return{
            // getName: Strings
            username: 'Kukwa Clovis Ngong',
            counter: 0,
            trial: 0
        }
    },
    methods: {
        //  getName : localStorage.getItem('username'),
        //  username : JSON.parse(getName)
        start() {
            setInterval(() => {
                this.counter++;
                // if(this.counter += 20) {
                //     this.trial++;
                // }
                 if(this.counter == 60) {
                this.trial = 1;
                // for(let i = 0; i <= this.counter; i++){
                //     this.counter = this.counter + 20;
                //     this.trial++;
                // }
            }
            }, 1000)
           
        },
        stop() {
            // clearInterval()
            this.counter = 0;
        }
    }
}
</script>

<style lang="scss" scoped>

    .quiz-page{
        width: 100%;
        height: 100vh;
        background: linear-gradient(to right, rgb(58, 76, 104) 0%, rgb(89, 60, 105) 50%, rgba(39, 20, 71, 0.849) 100%);
        // background: url('/assets/images(1).jpg');
        // background: url('/assets/web developement.jpg');
        display: flex;
        justify-content: center;
        align-items: center;

        .quiz{
            width: 40%;
            height: 95vh;
            border-radius: 10px;
            border: none;
            background: linear-gradient(to bottom, rgb(14,25,69) 0%, rgb(96,97,118) 50%, rgb(14,25,69) 100%);
            position: relative;
            animation: show 5s 1 linear alternate forwards;
            @media screen and (max-width:768px) {
                width: 70%;
            }

            .profile{
                width: 70px;
                height: 70px;
                border-radius: 50%;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 1% auto;
                background: coral;
                color: white;
                text-transform: uppercase;
                cursor: pointer;
            }
            .levels{
                width: 100%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-direction: column;
                button{
                    width: 70%;
                    height: 40px;
                    margin: 1% 0;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    text-transform: capitalize;
                    transition: all 0.3s ease;
                    background: white;

                    &:hover{
                        background: transparent;
                        color: white;
                        border: 1px solid white;
                    }
                     &:first-child{
                    background: coral;
                    color: white;
                }
                }
            }

            .counter{
                width: 15%;
                height: 30px;
                // border: 1px solid white;
                // margin: 2% auto;
                color: white;
                text-transform: capitalize;
                font-size: 12px;
                padding: 5px;
                position: absolute;
                top: 29px;
                left: 10px;
                cursor: pointer;
                span{
                    font-size: 14px;
                }
            }

            p{
                color: whitesmoke;
                text-transform: capitalize;
                margin: 1% 0;
            }

            textarea{
                width: 79%;
                height: 60px;
                padding: 5px 10px 0 20px;
                border-radius: 5px;
                text-overflow: clip;
                word-wrap: break-word;
                outline: none;
                margin: 2% 0 0 0;
            }

            .control{
                 button{
                width:20%;
                height: 30px;
                cursor: pointer;
                width: 40%;
                height: 30px;
                border-radius: 5px;
                outline: none;
                border: none;
                margin: 1%;
                text-transform: capitalize;
                transition: all 0.3s ease;
                background: white;

               &:last-child{
                   background: transparent;
                   border: 1px solid white;
                   color: white;
               }

                &:hover{
                        background: coral;
                        color: white;
                        border: 1px solid rgb(201, 140, 176);
                        cursor: progress;
                    }
            }
            }

            .results{
                width: 90%;
                margin: 1% auto;
                border: 1px solid rgba(112, 66, 165, 0.274);
                p{
                    text-align: left;
                    padding-left: 15px;
                    cursor: pointer;
                }
            }
           
        }

        @keyframes show {
            0%{
                transform: rotateZ(180deg);
                left: -50vw;
                
            }
            50%{
                left: 10vw;
                transform: rotateY(360deg);
            }
            75%{
                left: -10vw;
            }
            90%{
                left: 5vw;
                opacity: 0;
                transform: rotateY(180deg);
            }
            100%{
                left: 0;
                transform: rotateY(360deg);
                opacity: 1;
            }
        }
    }
</style>