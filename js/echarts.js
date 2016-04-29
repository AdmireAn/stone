function sleep(numberMillis) {
	var now = new Date();
	var exitTime = now.getTime() + numberMillis;
	while (true) {
		now = new Date();
		if (now.getTime() > exitTime)
		return;
}
}
var myChart1 = echarts.init(document.getElementById('main1'));
//myChart1.showLoading();
//sleep(5000);
	//myChart1.hideLoading();

        // ָ��ͼ��������������
        var option = {
    title: {
        text: '����ͼ�ѵ�'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['�ʼ�Ӫ��','���˹��','��Ƶ���','ֱ�ӷ���','��������']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['0','100','200','300','400','500','600']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'�ʼ�Ӫ��',
            type:'line',
            stack: '����',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'���˹��',
            type:'line',
            stack: '����',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'��Ƶ���',
            type:'line',
            stack: '����',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'ֱ�ӷ���',
            type:'line',
            stack: '����',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'��������',
            type:'line',
            stack: '����',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};


        // ʹ�ø�ָ�����������������ʾͼ��
        myChart1.setOption(option);
	
//ͼ��*****************************************************************************************************************************************************
		var myChart2 = echarts.init(document.getElementById('main2'));

        // ָ��ͼ��������������
        var option = {
    title: {
        text: '������ʾ��',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
        left: 'left',
        data: ['2��ָ��', '3��ָ��']
    },
    xAxis: {
        type: 'category',
        name: 'x',
        splitLine: {show: false},
        data: ['0','100','200','300','400','500','600','700','800','900']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'log',
        name: 'y'
    },
    series: [
        {
            name: '3��ָ��',
            type: 'line',
            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
        },
        {
            name: '2��ָ��',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
        },
        {
            name: '1/2��ָ��',
            type: 'line',
            data: [1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256, 1/512]
        }
    ]
};



        // ʹ�ø�ָ�����������������ʾͼ��
        myChart2.setOption(option);
		//ͼ��*****************************************************************************************************************************************************
		var myChart3 = echarts.init(document.getElementById('main3'));

        // ָ��ͼ��������������
        var option = {
    legend: {
        data:['�߶�(km)������(��C)�仯��ϵ']
    },
    tooltip: {
        trigger: 'axis',
        formatter: "Temperature : <br/>{b}km : {c}��C"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {onZero: false},
        axisLabel: {
            formatter: '{value} km'
        },
        boundaryGap: false,
        data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
    },
    series: [
        {
            name: 'the realation between',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(0,0,0,0.4)',
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
            data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
        }
    ]
};


        // ʹ�ø�ָ�����������������ʾͼ��
        myChart3.setOption(option);
		
		
		//ͼ��*****************************************************************************************************************************************************
		var myChart4 = echarts.init(document.getElementById('main4'));

        // ָ��ͼ��������������
        var option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // ������ָʾ���������ᴥ����Ч
            type : 'shadow'        // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
        }
    },
    legend: {
        data:['ֱ�ӷ���','�ʼ�Ӫ��','���˹��','��Ƶ���','��������','�ٶ�','�ȸ�','��Ӧ','����']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['baidu','ali','tecent','meituan','xiaomi','geli','huawei']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'ֱ�ӷ���',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'�ʼ�Ӫ��',
            type:'bar',
            stack: '���',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'���˹��',
            type:'bar',
            stack: '���',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'��Ƶ���',
            type:'bar',
            stack: '���',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'��������',
            type:'bar',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
        {
            name:'�ٶ�',
            type:'bar',
            barWidth : 5,
            stack: '��������',
            data:[620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name:'�ȸ�',
            type:'bar',
            stack: '��������',
            data:[120, 132, 101, 134, 290, 230, 220]
        },
        {
            name:'��Ӧ',
            type:'bar',
            stack: '��������',
            data:[60, 72, 71, 74, 190, 130, 110]
        },
        {
            name:'����',
            type:'bar',
            stack: '��������',
            data:[62, 82, 91, 84, 109, 110, 120]
        }
    ]
};



        // ʹ�ø�ָ�����������������ʾͼ��
        myChart4.setOption(option);
		
		//ͼ��*****************************************************************************************************************************************************
		var myChart5 = echarts.init(document.getElementById('main5'));

        // ָ��ͼ��������������
        var option = {
    title : {
        text: 'ĳվ���û�������Դ',
        subtext: '�����鹹',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['ֱ�ӷ���','�ʼ�Ӫ��','���˹��','��Ƶ���','��������']
    },
    series : [
        {
            name: '������Դ',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'ֱ�ӷ���'},
                {value:310, name:'�ʼ�Ӫ��'},
                {value:234, name:'���˹��'},
                {value:135, name:'��Ƶ���'},
                {value:1548, name:'��������'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};




        // ʹ�ø�ָ�����������������ʾͼ��
        myChart5.setOption(option);