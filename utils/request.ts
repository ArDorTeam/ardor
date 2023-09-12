// 创建一个简单的请求方法api.ts

// 创建一个通用的 API 响应类型
type ApiResponse<T> = {
    success: boolean;
    data?: T;
    error?: string;
};

// 定义请求方法的参数类型
type RequestOptions = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'; // 请求方法：目前应该只有GET、POST
    data?: Record<string, any>;
};

// 封装请求方法
export const fetchAPI = async <T>(
    endpoint: string,
    options: RequestOptions
): Promise<ApiResponse<T>> => {
    // const apiUrl = 'http://110.42.234.194'; // 服务器地址 , 联调的时候

    const headers = {
        'Content-Type': 'application/json',
        // 如果需要授权，可以在这里添加授权头部
        // 'Authorization': `Bearer ${accessToken}`,
    };

    // RequestInit  请求初始化，暂不需要配置

    // const requestInit = {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // 可以添加其他自定义头部...
    //   },
    //   // 如果有请求体数据，可以在这里设置
    // };

    const requestOptions: RequestInit = {
        method: options.method,
        // headers,
    };

    if (options.data) {
        requestOptions.body = JSON.stringify(options.data) as BodyInit;
    }

    try {
        // const response = await fetch(`${apiUrl}/${endpoint}`, requestOptions);
        const response = await fetch(`${endpoint}`, requestOptions);
        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.error || '请求失败');
        }

        return { success: true, data: responseData };
    } catch (error: any) {
        return { success: false, error: error.message || '请求失败' };
    }
};