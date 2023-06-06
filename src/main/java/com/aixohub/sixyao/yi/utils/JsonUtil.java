package com.aixohub.sixyao.yi.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonUtil {
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();


    public static String toJson(Object o) {
        try {
            return OBJECT_MAPPER.writeValueAsString(o);
        } catch (JsonProcessingException e) {
            return null;
        }
    }

    public static <T> T parse(String json, Class<T> t) {
        try {
            return OBJECT_MAPPER.readValue(json, t);
        } catch (JsonProcessingException e) {
            return null;
        }
    }
}
