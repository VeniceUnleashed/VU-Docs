---
title: EffectComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[EffectComponentData](#constructor-0)**() |
| **[EffectComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EffectComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[EffectComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[EffectComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[EffectComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "effect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "emitterParameter1" >}} | float |
| {{< prop "emitterParameter3" >}} | float |
| {{< prop "emitterParameter2" >}} | float |
| {{< prop "autoStart" >}} | bool |
| {{< prop "snapToWaterSurface" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EffectComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EffectComponentData {#constructor-0}

> **EffectComponentData**()

Creates a new [EffectComponentData](/vext/ref/fb/effectcomponentdata) frostbite instance.

### EffectComponentData {#constructor-1}

> **EffectComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EffectComponentData](/vext/ref/fb/effectcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EffectComponentData {#constructor-2}

> **EffectComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [EffectComponentData](/vext/ref/fb/effectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [EffectComponentData](/vext/ref/fb/effectcomponentdata). |

### EffectComponentData {#constructor-3}

> **EffectComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [EffectComponentData](/vext/ref/fb/effectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [EffectComponentData](/vext/ref/fb/effectcomponentdata). |

### EffectComponentData {#constructor-4}

> **EffectComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [EffectComponentData](/vext/ref/fb/effectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [EffectComponentData](/vext/ref/fb/effectcomponentdata). |

### EffectComponentData {#constructor-5}

> **EffectComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EffectComponentData](/vext/ref/fb/effectcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EffectComponentData](/vext/ref/fb/effectcomponentdata). |

## Properties

### {{% prop-heading "effect" %}}

> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** \| **nil**

### {{% prop-heading "emitterParameter1" %}}

> **float**

### {{% prop-heading "emitterParameter3" %}}

> **float**

### {{% prop-heading "emitterParameter2" %}}

> **float**

### {{% prop-heading "autoStart" %}}

> **bool**

### {{% prop-heading "snapToWaterSurface" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EffectComponentData](/vext/ref/fb/effectcomponentdata) type.

