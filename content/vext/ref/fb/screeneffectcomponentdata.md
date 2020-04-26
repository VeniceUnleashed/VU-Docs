---
title: ScreenEffectComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[ScreenEffectComponentData](#constructor-0)**() |
| **[ScreenEffectComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ScreenEffectComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[ScreenEffectComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ScreenEffectComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ScreenEffectComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "screenEffectParams" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "frameType" >}} | [ScreenEffectFrameType](/vext/ref/fb/screeneffectframetype) |
| {{< prop "shader" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "frameWidth" >}} | float |
| {{< prop "outerFrameOpacity" >}} | float |
| {{< prop "innerFrameOpacity" >}} | float |
| {{< prop "angle" >}} | float |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ScreenEffectComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ScreenEffectComponentData {#constructor-0}

> **ScreenEffectComponentData**()

Creates a new [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata) frostbite instance.

### ScreenEffectComponentData {#constructor-1}

> **ScreenEffectComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ScreenEffectComponentData {#constructor-2}

> **ScreenEffectComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata). |

### ScreenEffectComponentData {#constructor-3}

> **ScreenEffectComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata). |

### ScreenEffectComponentData {#constructor-4}

> **ScreenEffectComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata). |

### ScreenEffectComponentData {#constructor-5}

> **ScreenEffectComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata). |

## Properties

### {{% prop-heading "screenEffectParams" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "frameType" %}}

> **[ScreenEffectFrameType](/vext/ref/fb/screeneffectframetype)**

### {{% prop-heading "shader" %}}

> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** \| **nil**

### {{% prop-heading "frameWidth" %}}

> **float**

### {{% prop-heading "outerFrameOpacity" %}}

> **float**

### {{% prop-heading "innerFrameOpacity" %}}

> **float**

### {{% prop-heading "angle" %}}

> **float**

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata) type.

