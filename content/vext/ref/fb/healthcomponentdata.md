---
title: HealthComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[HealthComponentData](#constructor-0)**() |
| **[HealthComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[HealthComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[HealthComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[HealthComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[HealthComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "health" >}} | float |
| {{< prop "materialPair" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "HealthComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### HealthComponentData {#constructor-0}

> **HealthComponentData**()

Creates a new [HealthComponentData](/vext/ref/fb/healthcomponentdata) frostbite instance.

### HealthComponentData {#constructor-1}

> **HealthComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [HealthComponentData](/vext/ref/fb/healthcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### HealthComponentData {#constructor-2}

> **HealthComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [HealthComponentData](/vext/ref/fb/healthcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [HealthComponentData](/vext/ref/fb/healthcomponentdata). |

### HealthComponentData {#constructor-3}

> **HealthComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [HealthComponentData](/vext/ref/fb/healthcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [HealthComponentData](/vext/ref/fb/healthcomponentdata). |

### HealthComponentData {#constructor-4}

> **HealthComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [HealthComponentData](/vext/ref/fb/healthcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [HealthComponentData](/vext/ref/fb/healthcomponentdata). |

### HealthComponentData {#constructor-5}

> **HealthComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [HealthComponentData](/vext/ref/fb/healthcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [HealthComponentData](/vext/ref/fb/healthcomponentdata). |

## Properties

### {{% prop-heading "health" %}}

> **float**

### {{% prop-heading "materialPair" %}}

> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [HealthComponentData](/vext/ref/fb/healthcomponentdata) type.

