var a = 1 ;
var b = "World";
var c = function(x){
	console.log('Hello'+x+a);
};

c(b);


//���������п���ʹ�� node debug debug.js ����� debug.js �ļ����е���
/**
	node.js �ĵ��Թ������� V8 �ṩ�ģ�������һ��ĸ�Ч�ͷ��������
���������

	run					ִ�нű����ڵ�һ����ͣ
	restart				����ִ�нű�
	cont c				����ִ�У�ֱ��������һ���ϵ�
	next n				����ִ��
	step s				����ִ�в����뺯��
	out  o				�Ӻ����в���
	setBreakpoint() sb()�ӵ�ǰ�����öϵ�
	clearBreakpoint() cs()	������еĶϵ�
	backtrace bt		��ʾ��ǰ�ĵ���ջ
	list(5)				��ʾ��ǰִ�е�ǰ��5�д���
	watch(expr)			�ѱ��ʽ expr ���뵽�����б�
	unwatch(expr)		�ѱ��ʽ expr �Ӽ����б����Ƴ�
	watchers			��ʾ�����б������б��ʽ��ֵ
	repl				�ڵ�ǰ�����Ĵ򿪼�ʱ��ֵ����
	kill				��ֹ��ǰִ�еĽű�
	scripts				��ʾ��ǰ�Ѽ��ص����нű�
	version				��ʾ V8 �İ汾

Զ�̵���
	V8 �ṩ�ĵ��Թ����ǻ��� TCP Э�� �ģ���� Node.js �������ɵ�ʵ��Զ�̵��ԣ�����������ʹ���������򿪵���������
		node --debug[=port] script.js
		node --debug-brk[=port] script.js

	node --debug ����ѡ������������Է�������Ĭ����������õĵ��Զ˿��� 5858��Ҳ����ʹ�� --debug=1234 ָ�����Զ˿�Ϊ1234
	ʹ�� --debug ѡ�����нű�ʱ���ű�������ִ�У���������ͣ����ִ�й����е��Կͻ��˿������ӵ���������������ű�

*/