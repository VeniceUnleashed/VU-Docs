---
title: BoolShaderParameter
---

## Summary

### Constructors

|  |
| --- |
| **[BoolShaderParameter](#constructor-0)**() |
| **[BoolShaderParameter](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "parameterName" >}} | string |
| {{< prop "value" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [BoolShaderParameter](/vext/ref/fb/boolshaderparameter) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BoolShaderParameter" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BoolShaderParameter {#constructor-0}

> **BoolShaderParameter**()

Creates a new [BoolShaderParameter](/vext/ref/fb/boolshaderparameter) frostbite instance.

### BoolShaderParameter {#constructor-1}

> **BoolShaderParameter**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BoolShaderParameter](/vext/ref/fb/boolshaderparameter) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "parameterName" %}}

> **string**

### {{% prop-heading "value" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [BoolShaderParameter](/vext/ref/fb/boolshaderparameter)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[BoolShaderParameter](/vext/ref/fb/boolshaderparameter)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BoolShaderParameter](/vext/ref/fb/boolshaderparameter) type.

