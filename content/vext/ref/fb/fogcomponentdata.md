---
title: FogComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[FogComponentData](#constructor-0)**() |
| **[FogComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[FogComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[FogComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[FogComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[FogComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "curve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "fogColorCurve" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "fogColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "fogColorStart" >}} | float |
| {{< prop "fogDistanceMultiplier" >}} | float |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "endValue" >}} | float |
| {{< prop "transparencyFadeStart" >}} | float |
| {{< prop "start" >}} | float |
| {{< prop "transparencyFadeEnd" >}} | float |
| {{< prop "fogColorEnd" >}} | float |
| {{< prop "transparencyFadeClamp" >}} | float |
| {{< prop "heightFogVisibilityRange" >}} | float |
| {{< prop "heightFogAltitude" >}} | float |
| {{< prop "heightFogDepth" >}} | float |
| {{< prop "heightFogFollowCamera" >}} | float |
| {{< prop "fogGradientEnable" >}} | bool |
| {{< prop "enable" >}} | bool |
| {{< prop "heightFogEnable" >}} | bool |
| {{< prop "fogColorEnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FogComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FogComponentData {#constructor-0}

> **FogComponentData**()

Creates a new [FogComponentData](/vext/ref/fb/fogcomponentdata) frostbite instance.

### FogComponentData {#constructor-1}

> **FogComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FogComponentData](/vext/ref/fb/fogcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### FogComponentData {#constructor-2}

> **FogComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [FogComponentData](/vext/ref/fb/fogcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [FogComponentData](/vext/ref/fb/fogcomponentdata). |

### FogComponentData {#constructor-3}

> **FogComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [FogComponentData](/vext/ref/fb/fogcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [FogComponentData](/vext/ref/fb/fogcomponentdata). |

### FogComponentData {#constructor-4}

> **FogComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [FogComponentData](/vext/ref/fb/fogcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [FogComponentData](/vext/ref/fb/fogcomponentdata). |

### FogComponentData {#constructor-5}

> **FogComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [FogComponentData](/vext/ref/fb/fogcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [FogComponentData](/vext/ref/fb/fogcomponentdata). |

## Properties

### {{% prop-heading "curve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "fogColorCurve" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "fogColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "fogColorStart" %}}

> **float**

### {{% prop-heading "fogDistanceMultiplier" %}}

> **float**

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "endValue" %}}

> **float**

### {{% prop-heading "transparencyFadeStart" %}}

> **float**

### {{% prop-heading "start" %}}

> **float**

### {{% prop-heading "transparencyFadeEnd" %}}

> **float**

### {{% prop-heading "fogColorEnd" %}}

> **float**

### {{% prop-heading "transparencyFadeClamp" %}}

> **float**

### {{% prop-heading "heightFogVisibilityRange" %}}

> **float**

### {{% prop-heading "heightFogAltitude" %}}

> **float**

### {{% prop-heading "heightFogDepth" %}}

> **float**

### {{% prop-heading "heightFogFollowCamera" %}}

> **float**

### {{% prop-heading "fogGradientEnable" %}}

> **bool**

### {{% prop-heading "enable" %}}

> **bool**

### {{% prop-heading "heightFogEnable" %}}

> **bool**

### {{% prop-heading "fogColorEnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FogComponentData](/vext/ref/fb/fogcomponentdata) type.

