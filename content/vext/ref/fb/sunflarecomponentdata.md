---
title: SunFlareComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[SunFlareComponentData](#constructor-0)**() |
| **[SunFlareComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SunFlareComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[SunFlareComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SunFlareComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SunFlareComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "element5AlphaScreenPosCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element5AlphaOccluderCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element5SizeScreenPosCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element2SizeOccluderCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element5SizeOccluderCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element2AlphaOccluderCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element2AlphaScreenPosCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element1Size" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "element1SizeOccluderCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element1SizeScreenPosCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element1AlphaOccluderCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element1AlphaScreenPosCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element5Size" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "element4SizeOccluderCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element3Size" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "element2Size" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "element4AlphaScreenPosCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element2SizeScreenPosCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element4SizeScreenPosCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element4Size" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "element3AlphaScreenPosCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element4AlphaOccluderCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element3SizeOccluderCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element3SizeScreenPosCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element3AlphaOccluderCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "element1Shader" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "occluderSize" >}} | float |
| {{< prop "element2Shader" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "element3RayDistance" >}} | float |
| {{< prop "element4Shader" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "element4RayDistance" >}} | float |
| {{< prop "element2RayDistance" >}} | float |
| {{< prop "element1RayDistance" >}} | float |
| {{< prop "element5RayDistance" >}} | float |
| {{< prop "element3Shader" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "element5Shader" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "element5Enable" >}} | bool |
| {{< prop "element3Enable" >}} | bool |
| {{< prop "element2Enable" >}} | bool |
| {{< prop "element1Enable" >}} | bool |
| {{< prop "debugDrawOccluder" >}} | bool |
| {{< prop "enable" >}} | bool |
| {{< prop "element4Enable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SunFlareComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SunFlareComponentData {#constructor-0}

> **SunFlareComponentData**()

Creates a new [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata) frostbite instance.

### SunFlareComponentData {#constructor-1}

> **SunFlareComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SunFlareComponentData {#constructor-2}

> **SunFlareComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata). |

### SunFlareComponentData {#constructor-3}

> **SunFlareComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata). |

### SunFlareComponentData {#constructor-4}

> **SunFlareComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata). |

### SunFlareComponentData {#constructor-5}

> **SunFlareComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata). |

## Properties

### {{% prop-heading "element5AlphaScreenPosCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element5AlphaOccluderCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element5SizeScreenPosCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element2SizeOccluderCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element5SizeOccluderCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element2AlphaOccluderCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element2AlphaScreenPosCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element1Size" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "element1SizeOccluderCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element1SizeScreenPosCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element1AlphaOccluderCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element1AlphaScreenPosCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element5Size" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "element4SizeOccluderCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element3Size" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "element2Size" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "element4AlphaScreenPosCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element2SizeScreenPosCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element4SizeScreenPosCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element4Size" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "element3AlphaScreenPosCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element4AlphaOccluderCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element3SizeOccluderCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element3SizeScreenPosCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element3AlphaOccluderCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "element1Shader" %}}

> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** \| **nil**

### {{% prop-heading "occluderSize" %}}

> **float**

### {{% prop-heading "element2Shader" %}}

> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** \| **nil**

### {{% prop-heading "element3RayDistance" %}}

> **float**

### {{% prop-heading "element4Shader" %}}

> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** \| **nil**

### {{% prop-heading "element4RayDistance" %}}

> **float**

### {{% prop-heading "element2RayDistance" %}}

> **float**

### {{% prop-heading "element1RayDistance" %}}

> **float**

### {{% prop-heading "element5RayDistance" %}}

> **float**

### {{% prop-heading "element3Shader" %}}

> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** \| **nil**

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "element5Shader" %}}

> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** \| **nil**

### {{% prop-heading "element5Enable" %}}

> **bool**

### {{% prop-heading "element3Enable" %}}

> **bool**

### {{% prop-heading "element2Enable" %}}

> **bool**

### {{% prop-heading "element1Enable" %}}

> **bool**

### {{% prop-heading "debugDrawOccluder" %}}

> **bool**

### {{% prop-heading "enable" %}}

> **bool**

### {{% prop-heading "element4Enable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata) type.

