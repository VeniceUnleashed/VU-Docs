---
title: SurfaceShaderInstanceData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SurfaceShaderInstanceData](#constructor-0)**() |
| **[SurfaceShaderInstanceData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SurfaceShaderInstanceData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "shader" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SurfaceShaderInstanceData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SurfaceShaderInstanceData {#constructor-0}

> **SurfaceShaderInstanceData**()

Creates a new [SurfaceShaderInstanceData](/vext/ref/fb/surfaceshaderinstancedata) frostbite instance.

### SurfaceShaderInstanceData {#constructor-1}

> **SurfaceShaderInstanceData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SurfaceShaderInstanceData](/vext/ref/fb/surfaceshaderinstancedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SurfaceShaderInstanceData {#constructor-2}

> **SurfaceShaderInstanceData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SurfaceShaderInstanceData](/vext/ref/fb/surfaceshaderinstancedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SurfaceShaderInstanceData](/vext/ref/fb/surfaceshaderinstancedata). |

## Properties

### {{% prop-heading "shader" %}}

> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SurfaceShaderInstanceData](/vext/ref/fb/surfaceshaderinstancedata) type.

