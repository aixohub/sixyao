<html><head>
    <meta charset="UTF-8">
    <title>六爻排盘页面</title>
    <meta content="六爻;八卦;算卦;占卜;中华玄门" name="keywords">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style type="text/css">
        body {font-family: 宋体;}
        a:link{text-decoration: none; color: dodgerblue;}
        a:visited{text-decoration: none; color: dodgerblue; }
        a:hover{text-decoration: none; color: Fuchsia; }
        table{
            margin-left: auto;
            margin-right: auto;
            min-width: 600px;
            max-width: 800px;
        }
    </style>
</head>
<body>
<div id="header">
    <center>
        <table><tbody><tr><td align="center">
                    <h3>
                        <a href="https://paipan.gitee.io/" target="_blank">中华玄门网</a>
                        · <a href="index.htm" target="_blank">排盘首页</a>
                        · <a href="liuyao.htm" style="color: red;">手工摇卦</a>
                        · <a href="liuyaosj.htm">时间起卦</a>
                        · <a href="liuyaosz.htm">数字起卦</a>
                        · <a href="liuyaohz.htm">汉字起卦</a>
                    </h3>
                </td></tr></tbody></table>
    </center>
</div>

<center> <!-- 排盘页面整个是一张表格 -->
    <table><tbody><tr><td align="center">
                <div id="AllText">

                    <div id="selectparas">
                        <form>
                            <input id="rdTimeGG" type="radio" name="rdTime" value="0" checked="checked" onchange="OnGLNLChanged();">
                            起卦公历时间：
                            <select id="sGGYear" onchange="OnGGYearChanged();">

                                <option value="1924">1924</option><option value="1925">1925</option><option value="1926">1926</option><option value="1927">1927</option><option value="1928">1928</option><option value="1929">1929</option><option value="1930">1930</option><option value="1931">1931</option><option value="1932">1932</option><option value="1933">1933</option><option value="1934">1934</option><option value="1935">1935</option><option value="1936">1936</option><option value="1937">1937</option><option value="1938">1938</option><option value="1939">1939</option><option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option><option value="2022">2022</option><option value="2023">2023</option><option value="2024">2024</option><option value="2025">2025</option><option value="2026">2026</option><option value="2027">2027</option><option value="2028">2028</option><option value="2029">2029</option><option value="2030">2030</option><option value="2031">2031</option><option value="2032">2032</option><option value="2033">2033</option><option value="2034">2034</option><option value="2035">2035</option><option value="2036">2036</option><option value="2037">2037</option><option value="2038">2038</option><option value="2039">2039</option><option value="2040">2040</option><option value="2041">2041</option><option value="2042">2042</option><option value="2043">2043</option><option value="2044">2044</option><option value="2045">2045</option><option value="2046">2046</option><option value="2047">2047</option><option value="2048">2048</option><option value="2049">2049</option><option value="2050">2050</option><option value="2051">2051</option><option value="2052">2052</option><option value="2053">2053</option><option value="2054">2054</option><option value="2055">2055</option><option value="2056">2056</option><option value="2057">2057</option><option value="2058">2058</option><option value="2059">2059</option><option value="2060">2060</option><option value="2061">2061</option><option value="2062">2062</option><option value="2063">2063</option><option value="2064">2064</option><option value="2065">2065</option><option value="2066">2066</option><option value="2067">2067</option><option value="2068">2068</option><option value="2069">2069</option><option value="2070">2070</option><option value="2071">2071</option><option value="2072">2072</option><option value="2073">2073</option><option value="2074">2074</option><option value="2075">2075</option><option value="2076">2076</option><option value="2077">2077</option><option value="2078">2078</option><option value="2079">2079</option><option value="2080">2080</option><option value="2081">2081</option><option value="2082">2082</option><option value="2083">2083</option><option value="2084">2084</option><option value="2085">2085</option><option value="2086">2086</option><option value="2087">2087</option><option value="2088">2088</option><option value="2089">2089</option><option value="2090">2090</option><option value="2091">2091</option><option value="2092">2092</option><option value="2093">2093</option><option value="2094">2094</option><option value="2095">2095</option><option value="2096">2096</option><option value="2097">2097</option><option value="2098">2098</option><option value="2099">2099</option><option value="2100">2100</option><option value="2101">2101</option><option value="2102">2102</option><option value="2103">2103</option><option value="2104">2104</option><option value="2105">2105</option><option value="2106">2106</option><option value="2107">2107</option><option value="2108">2108</option><option value="2109">2109</option><option value="2110">2110</option><option value="2111">2111</option><option value="2112">2112</option><option value="2113">2113</option><option value="2114">2114</option><option value="2115">2115</option><option value="2116">2116</option><option value="2117">2117</option><option value="2118">2118</option><option value="2119">2119</option><option value="2120">2120</option><option value="2121">2121</option><option value="2122">2122</option><option value="2123">2123</option><option value="2124">2124</option><option value="2125">2125</option><option value="2126">2126</option><option value="2127">2127</option><option value="2128">2128</option><option value="2129">2129</option><option value="2130">2130</option><option value="2131">2131</option><option value="2132">2132</option><option value="2133">2133</option><option value="2134">2134</option><option value="2135">2135</option><option value="2136">2136</option><option value="2137">2137</option><option value="2138">2138</option><option value="2139">2139</option><option value="2140">2140</option><option value="2141">2141</option><option value="2142">2142</option><option value="2143">2143</option><option value="2144">2144</option><option value="2145">2145</option><option value="2146">2146</option><option value="2147">2147</option><option value="2148">2148</option><option value="2149">2149</option><option value="2150">2150</option><option value="2151">2151</option><option value="2152">2152</option><option value="2153">2153</option><option value="2154">2154</option><option value="2155">2155</option><option value="2156">2156</option><option value="2157">2157</option><option value="2158">2158</option><option value="2159">2159</option><option value="2160">2160</option><option value="2161">2161</option><option value="2162">2162</option><option value="2163">2163</option><option value="2164">2164</option></select> 年
                            <select id="sGGMonth" onchange="OnGGMonthChanged();">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12" selected="selected">12</option>
                            </select> 月
                            <select id="sGGDay">

                                <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option></select> 日
                            <select id="sGGHour">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                            </select> 时
                            <select id="sGGMinute">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30" selected="selected">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                                <option value="51">51</option>
                                <option value="52">52</option>
                                <option value="53">53</option>
                                <option value="54">54</option>
                                <option value="55">55</option>
                                <option value="56">56</option>
                                <option value="57">57</option>
                                <option value="58">58</option>
                                <option value="59">59</option>
                            </select>分&emsp;&emsp;&emsp;&emsp;
                            <br>
                            <input id="rdTimeNN" type="radio" name="rdTime" value="1" onchange="OnGLNLChanged();">
                            起卦农历时间：
                            <select id="sNNYear" onchange="OnNNYearChanged();" disabled=""> <!--农历年份变化自动更新月份-->

                                <option value="1924">1924甲子</option><option value="1925">1925乙丑</option><option value="1926">1926丙寅</option><option value="1927">1927丁卯</option><option value="1928">1928戊辰</option><option value="1929">1929己巳</option><option value="1930">1930庚午</option><option value="1931">1931辛未</option><option value="1932">1932壬申</option><option value="1933">1933癸酉</option><option value="1934">1934甲戌</option><option value="1935">1935乙亥</option><option value="1936">1936丙子</option><option value="1937">1937丁丑</option><option value="1938">1938戊寅</option><option value="1939">1939己卯</option><option value="1940">1940庚辰</option><option value="1941">1941辛巳</option><option value="1942">1942壬午</option><option value="1943">1943癸未</option><option value="1944">1944甲申</option><option value="1945">1945乙酉</option><option value="1946">1946丙戌</option><option value="1947">1947丁亥</option><option value="1948">1948戊子</option><option value="1949">1949己丑</option><option value="1950">1950庚寅</option><option value="1951">1951辛卯</option><option value="1952">1952壬辰</option><option value="1953">1953癸巳</option><option value="1954">1954甲午</option><option value="1955">1955乙未</option><option value="1956">1956丙申</option><option value="1957">1957丁酉</option><option value="1958">1958戊戌</option><option value="1959">1959己亥</option><option value="1960">1960庚子</option><option value="1961">1961辛丑</option><option value="1962">1962壬寅</option><option value="1963">1963癸卯</option><option value="1964">1964甲辰</option><option value="1965">1965乙巳</option><option value="1966">1966丙午</option><option value="1967">1967丁未</option><option value="1968">1968戊申</option><option value="1969">1969己酉</option><option value="1970">1970庚戌</option><option value="1971">1971辛亥</option><option value="1972">1972壬子</option><option value="1973">1973癸丑</option><option value="1974">1974甲寅</option><option value="1975">1975乙卯</option><option value="1976">1976丙辰</option><option value="1977">1977丁巳</option><option value="1978">1978戊午</option><option value="1979">1979己未</option><option value="1980">1980庚申</option><option value="1981">1981辛酉</option><option value="1982">1982壬戌</option><option value="1983">1983癸亥</option><option value="1984">1984甲子</option><option value="1985">1985乙丑</option><option value="1986">1986丙寅</option><option value="1987">1987丁卯</option><option value="1988">1988戊辰</option><option value="1989">1989己巳</option><option value="1990">1990庚午</option><option value="1991">1991辛未</option><option value="1992">1992壬申</option><option value="1993">1993癸酉</option><option value="1994">1994甲戌</option><option value="1995">1995乙亥</option><option value="1996">1996丙子</option><option value="1997">1997丁丑</option><option value="1998">1998戊寅</option><option value="1999">1999己卯</option><option value="2000">2000庚辰</option><option value="2001">2001辛巳</option><option value="2002">2002壬午</option><option value="2003">2003癸未</option><option value="2004">2004甲申</option><option value="2005">2005乙酉</option><option value="2006">2006丙戌</option><option value="2007">2007丁亥</option><option value="2008">2008戊子</option><option value="2009">2009己丑</option><option value="2010">2010庚寅</option><option value="2011">2011辛卯</option><option value="2012">2012壬辰</option><option value="2013">2013癸巳</option><option value="2014">2014甲午</option><option value="2015">2015乙未</option><option value="2016">2016丙申</option><option value="2017">2017丁酉</option><option value="2018">2018戊戌</option><option value="2019">2019己亥</option><option value="2020">2020庚子</option><option value="2021">2021辛丑</option><option value="2022">2022壬寅</option><option value="2023">2023癸卯</option><option value="2024">2024甲辰</option><option value="2025">2025乙巳</option><option value="2026">2026丙午</option><option value="2027">2027丁未</option><option value="2028">2028戊申</option><option value="2029">2029己酉</option><option value="2030">2030庚戌</option><option value="2031">2031辛亥</option><option value="2032">2032壬子</option><option value="2033">2033癸丑</option><option value="2034">2034甲寅</option><option value="2035">2035乙卯</option><option value="2036">2036丙辰</option><option value="2037">2037丁巳</option><option value="2038">2038戊午</option><option value="2039">2039己未</option><option value="2040">2040庚申</option><option value="2041">2041辛酉</option><option value="2042">2042壬戌</option><option value="2043">2043癸亥</option><option value="2044">2044甲子</option><option value="2045">2045乙丑</option><option value="2046">2046丙寅</option><option value="2047">2047丁卯</option><option value="2048">2048戊辰</option><option value="2049">2049己巳</option><option value="2050">2050庚午</option><option value="2051">2051辛未</option><option value="2052">2052壬申</option><option value="2053">2053癸酉</option><option value="2054">2054甲戌</option><option value="2055">2055乙亥</option><option value="2056">2056丙子</option><option value="2057">2057丁丑</option><option value="2058">2058戊寅</option><option value="2059">2059己卯</option><option value="2060">2060庚辰</option><option value="2061">2061辛巳</option><option value="2062">2062壬午</option><option value="2063">2063癸未</option><option value="2064">2064甲申</option><option value="2065">2065乙酉</option><option value="2066">2066丙戌</option><option value="2067">2067丁亥</option><option value="2068">2068戊子</option><option value="2069">2069己丑</option><option value="2070">2070庚寅</option><option value="2071">2071辛卯</option><option value="2072">2072壬辰</option><option value="2073">2073癸巳</option><option value="2074">2074甲午</option><option value="2075">2075乙未</option><option value="2076">2076丙申</option><option value="2077">2077丁酉</option><option value="2078">2078戊戌</option><option value="2079">2079己亥</option><option value="2080">2080庚子</option><option value="2081">2081辛丑</option><option value="2082">2082壬寅</option><option value="2083">2083癸卯</option><option value="2084">2084甲辰</option><option value="2085">2085乙巳</option><option value="2086">2086丙午</option><option value="2087">2087丁未</option><option value="2088">2088戊申</option><option value="2089">2089己酉</option><option value="2090">2090庚戌</option><option value="2091">2091辛亥</option><option value="2092">2092壬子</option><option value="2093">2093癸丑</option><option value="2094">2094甲寅</option><option value="2095">2095乙卯</option><option value="2096">2096丙辰</option><option value="2097">2097丁巳</option><option value="2098">2098戊午</option><option value="2099">2099己未</option><option value="2100">2100庚申</option><option value="2101">2101辛酉</option><option value="2102">2102壬戌</option><option value="2103">2103癸亥</option><option value="2104">2104甲子</option><option value="2105">2105乙丑</option><option value="2106">2106丙寅</option><option value="2107">2107丁卯</option><option value="2108">2108戊辰</option><option value="2109">2109己巳</option><option value="2110">2110庚午</option><option value="2111">2111辛未</option><option value="2112">2112壬申</option><option value="2113">2113癸酉</option><option value="2114">2114甲戌</option><option value="2115">2115乙亥</option><option value="2116">2116丙子</option><option value="2117">2117丁丑</option><option value="2118">2118戊寅</option><option value="2119">2119己卯</option><option value="2120">2120庚辰</option><option value="2121">2121辛巳</option><option value="2122">2122壬午</option><option value="2123">2123癸未</option><option value="2124">2124甲申</option><option value="2125">2125乙酉</option><option value="2126">2126丙戌</option><option value="2127">2127丁亥</option><option value="2128">2128戊子</option><option value="2129">2129己丑</option><option value="2130">2130庚寅</option><option value="2131">2131辛卯</option><option value="2132">2132壬辰</option><option value="2133">2133癸巳</option><option value="2134">2134甲午</option><option value="2135">2135乙未</option><option value="2136">2136丙申</option><option value="2137">2137丁酉</option><option value="2138">2138戊戌</option><option value="2139">2139己亥</option><option value="2140">2140庚子</option><option value="2141">2141辛丑</option><option value="2142">2142壬寅</option><option value="2143">2143癸卯</option><option value="2144">2144甲辰</option><option value="2145">2145乙巳</option><option value="2146">2146丙午</option><option value="2147">2147丁未</option><option value="2148">2148戊申</option><option value="2149">2149己酉</option><option value="2150">2150庚戌</option><option value="2151">2151辛亥</option><option value="2152">2152壬子</option><option value="2153">2153癸丑</option><option value="2154">2154甲寅</option><option value="2155">2155乙卯</option><option value="2156">2156丙辰</option><option value="2157">2157丁巳</option><option value="2158">2158戊午</option><option value="2159">2159己未</option><option value="2160">2160庚申</option><option value="2161">2161辛酉</option><option value="2162">2162壬戌</option><option value="2163">2163癸亥</option><option value="2164">2164甲子</option></select> 年
                            <select id="sNNMonth" onchange="OnNNMonthChanged();" disabled=""><!--农历月份变化自动更新日子-->
                                <!--农历的月、日都是序号，从0开始-->
                                <option value="0">正</option><option value="1">二</option><option value="2">三</option><option value="3">四</option><option value="4">五</option><option value="5">六</option><option value="6">七</option><option value="7">八</option><option value="8">九</option><option value="9">十</option><option value="10">十一</option><option value="11">十二</option></select> 月
                            <select id="sNNDay" disabled="">

                                <option value="0">初一</option><option value="1">初二</option><option value="2">初三</option><option value="3">初四</option><option value="4">初五</option><option value="5">初六</option><option value="6">初七</option><option value="7">初八</option><option value="8">初九</option><option value="9">初十</option><option value="10">十一</option><option value="11">十二</option><option value="12">十三</option><option value="13">十四</option><option value="14">十五</option><option value="15">十六</option><option value="16">十七</option><option value="17">十八</option><option value="18">十九</option><option value="19">二十</option><option value="20">廿一</option><option value="21">廿二</option><option value="22">廿三</option><option value="23">廿四</option><option value="24">廿五</option><option value="25">廿六</option><option value="26">廿七</option><option value="27">廿八</option><option value="28">廿九</option><option value="29">三十</option></select> 日
                            <select id="sNNHour" disabled="">
                                <option value="-1">前23</option> <!--农历的子时从前一天 23 点开始算-->
                                <option value="0" selected="selected">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                            </select> 时
                            <select id="sNNMinute" disabled="">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                                <option value="51">51</option>
                                <option value="52">52</option>
                                <option value="53">53</option>
                                <option value="54">54</option>
                                <option value="55">55</option>
                                <option value="56">56</option>
                                <option value="57">57</option>
                                <option value="58">58</option>
                                <option value="59">59</option>
                            </select>分
                            <br><br>
                            起卦占事：<input type="text" id="tZhanShi" size="42" value="一件事情"><br><br>
                            卦主性别：<select id="sGender">
                                <option value="女"> 女 </option>
                                <option value="男" selected="selected"> 男 </option>
                            </select>&emsp;
                            出生年份：<select id="sShengNian">

                                <option value="1924">1924甲子</option><option value="1925">1925乙丑</option><option value="1926">1926丙寅</option><option value="1927">1927丁卯</option><option value="1928">1928戊辰</option><option value="1929">1929己巳</option><option value="1930">1930庚午</option><option value="1931">1931辛未</option><option value="1932">1932壬申</option><option value="1933">1933癸酉</option><option value="1934">1934甲戌</option><option value="1935">1935乙亥</option><option value="1936">1936丙子</option><option value="1937">1937丁丑</option><option value="1938">1938戊寅</option><option value="1939">1939己卯</option><option value="1940">1940庚辰</option><option value="1941">1941辛巳</option><option value="1942">1942壬午</option><option value="1943">1943癸未</option><option value="1944">1944甲申</option><option value="1945">1945乙酉</option><option value="1946">1946丙戌</option><option value="1947">1947丁亥</option><option value="1948">1948戊子</option><option value="1949">1949己丑</option><option value="1950">1950庚寅</option><option value="1951">1951辛卯</option><option value="1952">1952壬辰</option><option value="1953">1953癸巳</option><option value="1954">1954甲午</option><option value="1955">1955乙未</option><option value="1956">1956丙申</option><option value="1957">1957丁酉</option><option value="1958">1958戊戌</option><option value="1959">1959己亥</option><option value="1960">1960庚子</option><option value="1961">1961辛丑</option><option value="1962">1962壬寅</option><option value="1963">1963癸卯</option><option value="1964">1964甲辰</option><option value="1965">1965乙巳</option><option value="1966">1966丙午</option><option value="1967">1967丁未</option><option value="1968">1968戊申</option><option value="1969">1969己酉</option><option value="1970">1970庚戌</option><option value="1971">1971辛亥</option><option value="1972">1972壬子</option><option value="1973">1973癸丑</option><option value="1974">1974甲寅</option><option value="1975">1975乙卯</option><option value="1976">1976丙辰</option><option value="1977">1977丁巳</option><option value="1978">1978戊午</option><option value="1979">1979己未</option><option value="1980">1980庚申</option><option value="1981">1981辛酉</option><option value="1982">1982壬戌</option><option value="1983">1983癸亥</option><option value="1984">1984甲子</option><option value="1985">1985乙丑</option><option value="1986">1986丙寅</option><option value="1987">1987丁卯</option><option value="1988">1988戊辰</option><option value="1989">1989己巳</option><option value="1990">1990庚午</option><option value="1991">1991辛未</option><option value="1992">1992壬申</option><option value="1993">1993癸酉</option><option value="1994">1994甲戌</option><option value="1995">1995乙亥</option><option value="1996">1996丙子</option><option value="1997">1997丁丑</option><option value="1998">1998戊寅</option><option value="1999">1999己卯</option><option value="2000">2000庚辰</option><option value="2001">2001辛巳</option><option value="2002">2002壬午</option><option value="2003">2003癸未</option><option value="2004">2004甲申</option><option value="2005">2005乙酉</option><option value="2006">2006丙戌</option><option value="2007">2007丁亥</option><option value="2008">2008戊子</option><option value="2009">2009己丑</option><option value="2010">2010庚寅</option><option value="2011">2011辛卯</option><option value="2012">2012壬辰</option><option value="2013">2013癸巳</option><option value="2014">2014甲午</option><option value="2015">2015乙未</option><option value="2016">2016丙申</option><option value="2017">2017丁酉</option><option value="2018">2018戊戌</option><option value="2019">2019己亥</option><option value="2020">2020庚子</option><option value="2021">2021辛丑</option><option value="2022">2022壬寅</option><option value="2023">2023癸卯</option><option value="2024">2024甲辰</option><option value="2025">2025乙巳</option><option value="2026">2026丙午</option><option value="2027">2027丁未</option><option value="2028">2028戊申</option><option value="2029">2029己酉</option><option value="2030">2030庚戌</option><option value="2031">2031辛亥</option><option value="2032">2032壬子</option><option value="2033">2033癸丑</option><option value="2034">2034甲寅</option><option value="2035">2035乙卯</option><option value="2036">2036丙辰</option><option value="2037">2037丁巳</option><option value="2038">2038戊午</option><option value="2039">2039己未</option><option value="2040">2040庚申</option><option value="2041">2041辛酉</option><option value="2042">2042壬戌</option><option value="2043">2043癸亥</option><option value="2044">2044甲子</option><option value="2045">2045乙丑</option><option value="2046">2046丙寅</option><option value="2047">2047丁卯</option><option value="2048">2048戊辰</option><option value="2049">2049己巳</option><option value="2050">2050庚午</option><option value="2051">2051辛未</option><option value="2052">2052壬申</option><option value="2053">2053癸酉</option><option value="2054">2054甲戌</option><option value="2055">2055乙亥</option><option value="2056">2056丙子</option><option value="2057">2057丁丑</option><option value="2058">2058戊寅</option><option value="2059">2059己卯</option><option value="2060">2060庚辰</option><option value="2061">2061辛巳</option><option value="2062">2062壬午</option><option value="2063">2063癸未</option><option value="2064">2064甲申</option><option value="2065">2065乙酉</option><option value="2066">2066丙戌</option><option value="2067">2067丁亥</option><option value="2068">2068戊子</option><option value="2069">2069己丑</option><option value="2070">2070庚寅</option><option value="2071">2071辛卯</option><option value="2072">2072壬辰</option><option value="2073">2073癸巳</option><option value="2074">2074甲午</option><option value="2075">2075乙未</option><option value="2076">2076丙申</option><option value="2077">2077丁酉</option><option value="2078">2078戊戌</option><option value="2079">2079己亥</option><option value="2080">2080庚子</option><option value="2081">2081辛丑</option><option value="2082">2082壬寅</option><option value="2083">2083癸卯</option><option value="2084">2084甲辰</option><option value="2085">2085乙巳</option><option value="2086">2086丙午</option><option value="2087">2087丁未</option><option value="2088">2088戊申</option><option value="2089">2089己酉</option><option value="2090">2090庚戌</option><option value="2091">2091辛亥</option><option value="2092">2092壬子</option><option value="2093">2093癸丑</option><option value="2094">2094甲寅</option><option value="2095">2095乙卯</option><option value="2096">2096丙辰</option><option value="2097">2097丁巳</option><option value="2098">2098戊午</option><option value="2099">2099己未</option><option value="2100">2100庚申</option><option value="2101">2101辛酉</option><option value="2102">2102壬戌</option><option value="2103">2103癸亥</option><option value="2104">2104甲子</option><option value="2105">2105乙丑</option><option value="2106">2106丙寅</option><option value="2107">2107丁卯</option><option value="2108">2108戊辰</option><option value="2109">2109己巳</option><option value="2110">2110庚午</option><option value="2111">2111辛未</option><option value="2112">2112壬申</option><option value="2113">2113癸酉</option><option value="2114">2114甲戌</option><option value="2115">2115乙亥</option><option value="2116">2116丙子</option><option value="2117">2117丁丑</option><option value="2118">2118戊寅</option><option value="2119">2119己卯</option><option value="2120">2120庚辰</option><option value="2121">2121辛巳</option><option value="2122">2122壬午</option><option value="2123">2123癸未</option><option value="2124">2124甲申</option><option value="2125">2125乙酉</option><option value="2126">2126丙戌</option><option value="2127">2127丁亥</option><option value="2128">2128戊子</option><option value="2129">2129己丑</option><option value="2130">2130庚寅</option><option value="2131">2131辛卯</option><option value="2132">2132壬辰</option><option value="2133">2133癸巳</option><option value="2134">2134甲午</option><option value="2135">2135乙未</option><option value="2136">2136丙申</option><option value="2137">2137丁酉</option><option value="2138">2138戊戌</option><option value="2139">2139己亥</option><option value="2140">2140庚子</option><option value="2141">2141辛丑</option><option value="2142">2142壬寅</option><option value="2143">2143癸卯</option><option value="2144">2144甲辰</option><option value="2145">2145乙巳</option><option value="2146">2146丙午</option><option value="2147">2147丁未</option><option value="2148">2148戊申</option><option value="2149">2149己酉</option><option value="2150">2150庚戌</option><option value="2151">2151辛亥</option><option value="2152">2152壬子</option><option value="2153">2153癸丑</option><option value="2154">2154甲寅</option><option value="2155">2155乙卯</option><option value="2156">2156丙辰</option><option value="2157">2157丁巳</option><option value="2158">2158戊午</option><option value="2159">2159己未</option><option value="2160">2160庚申</option><option value="2161">2161辛酉</option><option value="2162">2162壬戌</option><option value="2163">2163癸亥</option><option value="2164">2164甲子</option></select>&emsp;
                            <br>
                            <br><!-- 少阴0，少阳1，老阴2，老阳3  -->
                            第一次&emsp;<select id="sLY1">
                                <option value="2">零背三字（老阴 Ⅹ）</option>
                                <option value="1" selected="selected">一背二字（少阳 Ⅰ）</option>
                                <option value="0">二背一字（少阴 Ⅱ）</option>
                                <option value="3">三背零字（老阳 〇）</option>
                            </select><br>
                            第二次&emsp;<select id="sLY2">
                                <option value="2">零背三字（老阴 Ⅹ）</option>
                                <option value="1" selected="selected">一背二字（少阳 Ⅰ）</option>
                                <option value="0">二背一字（少阴 Ⅱ）</option>
                                <option value="3">三背零字（老阳 〇）</option>
                            </select><br>
                            第三次&emsp;<select id="sLY3">
                                <option value="2">零背三字（老阴 Ⅹ）</option>
                                <option value="1" selected="selected">一背二字（少阳 Ⅰ）</option>
                                <option value="0">二背一字（少阴 Ⅱ）</option>
                                <option value="3">三背零字（老阳 〇）</option>
                            </select><br><br>
                            第四次&emsp;<select id="sLY4">
                                <option value="2">零背三字（老阴 Ⅹ）</option>
                                <option value="1" selected="selected">一背二字（少阳 Ⅰ）</option>
                                <option value="0">二背一字（少阴 Ⅱ）</option>
                                <option value="3">三背零字（老阳 〇）</option>
                            </select><br>
                            第五次&emsp;<select id="sLY5">
                                <option value="2">零背三字（老阴 Ⅹ）</option>
                                <option value="1" selected="selected">一背二字（少阳 Ⅰ）</option>
                                <option value="0">二背一字（少阴 Ⅱ）</option>
                                <option value="3">三背零字（老阳 〇）</option>
                            </select><br>
                            第六次&emsp;<select id="sLY6">
                                <option value="2">零背三字（老阴 Ⅹ）</option>
                                <option value="1" selected="selected">一背二字（少阳 Ⅰ）</option>
                                <option value="0">二背一字（少阴 Ⅱ）</option>
                                <option value="3">三背零字（老阳 〇）</option>
                            </select><br>
                            <br>
                            <input type="button" id="btnPaiPan" onclick="CalcLiuYaoPanPai();" value="&emsp;六爻排盘&emsp;" style="font-size: large;"><br>
                        </form>
                    </div>

                    <br>

                    <div id="paipantext" align="left" style="line-height: 18pt;">
                        排盘说明：
                        <ul>
                            <li><span style="color: red"><b>注意可占与不可占的事情：</b></span><br>
                                1. 六爻只能测与本人相关的东西，不能测国家大事或明星绯闻。<br>
                                2. 无事不占，有事少占。<br>
                                3. 手动起卦别懒。<br>
                                4. 选择类无法占，比如既喜欢A，又喜欢B，到底应该和谁好，这类选择建议看合婚。
                            </li>
                            <li><b>注意不可起卦的时刻：</b><br>
                                1. 单数整点附近不可起卦，如 9:00、23:00，因为时辰或日子会变，这类时辰之交不可起卦。<br>
                                2. 二十四节气时刻附近不可起卦，因为月份会变，比如2018年立春是公历2月4号 05:28 ，这种节气时刻附近不能起卦。
                            </li>
                            <li><b>手工摇卦方法：</b><br>
                                取硬币三枚，有面值数字的为字，花朵或国徽为背，在准备掷时，记下起卦时间（通常用公历）和所占事情、自己性别、生年；
                                集中意念到所占事情上约一分钟，然后将三枚硬币投掷到桌子或其他平面上，记录字和背的个数，然后捡起三枚硬币再掷，以此类推，总共掷六次，掷完按照上面排盘。
                                排好盘之后，将卦发到中华玄门网求测即可。</li>
                            <li>如需测流年卦，请在“起卦占事”里填写有效年份（通常占本年或下一年）的 4 位数字，比如 2017，其他起卦步骤同上。</li>
                            <li><span style="color: blue; ">手机访问请使用搜狗浏览器、UC浏览器、绿茶浏览器或最新的Chrome浏览器访问本页面排盘，这几款浏览器默认使用等宽字体适合显示排盘。
            手机上如果网页显示不完整请缩小页面。</span><br>
                                电脑访问建议在最新的 Chrome、Firefox、Safari 或 IE9 以上浏览器访问本页面进行排盘。</li>
                        </ul>
                    </div>
                    <br>

                </div><!--//上面是HTML文本，下面是脚本-->

            </td></tr></tbody></table>
</center>
<!--js1S-->
<script src="tools.js"></script><!--工具函数-->
<script src="eph0.js"></script> <!--天文常数等-->
<script src="ephB.js"></script> <!--恒星计算(如果不须要恒星,删除此行)-->
<script src="eph.js"></script>  <!--星历模块-->
<script src="JW.js"></script>   <!--全国城市经纬数据库及皇帝纪年数据库-->
<script src="lunar.js"></script><!--日历物件-->
<script src="bazidata.js"></script><!--八字排盘数据-->
<script src="liuyaodata.js"></script><!--六爻数据-->
<script src="liuyao.js"></script><!--六爻脚本-->
<!--js1E-->
<script>
    //初始化加载
    //出生年份
    InitChuShengNianFen();
    //
    InitGGYears();    //加载公历年份
    InitGGDays();     //加载公历日子
    InitNNYears();    //加载农历年份
    InitNNDays();     //加载农历日子

    //填充当前时间
    FillCurTime();
</script><!--加载脚本-->


</body></html>