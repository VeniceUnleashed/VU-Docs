---
title: PartComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[PartComponentData](#constructor-0)**() |
| **[PartComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PartComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[PartComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PartComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PartComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "healthStates" >}} | [HealthStateData](/vext/ref/fb/healthstatedata)[] |
| {{< prop "partLinks" >}} | [PartLinkData](/vext/ref/fb/partlinkdata)[] |
| {{< prop "isSupported" >}} | bool |
| {{< prop "isFragile" >}} | bool |
| {{< prop "isNetworkable" >}} | bool |
| {{< prop "isWindow" >}} | bool |
| {{< prop "animatePhysics" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PartComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PartComponentData {#constructor-0}

> **PartComponentData**()

Creates a new [PartComponentData](/vext/ref/fb/partcomponentdata) frostbite instance.

### PartComponentData {#constructor-1}

> **PartComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PartComponentData](/vext/ref/fb/partcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PartComponentData {#constructor-2}

> **PartComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [PartComponentData](/vext/ref/fb/partcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [PartComponentData](/vext/ref/fb/partcomponentdata). |

### PartComponentData {#constructor-3}

> **PartComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PartComponentData](/vext/ref/fb/partcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PartComponentData](/vext/ref/fb/partcomponentdata). |

### PartComponentData {#constructor-4}

> **PartComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PartComponentData](/vext/ref/fb/partcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PartComponentData](/vext/ref/fb/partcomponentdata). |

### PartComponentData {#constructor-5}

> **PartComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PartComponentData](/vext/ref/fb/partcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PartComponentData](/vext/ref/fb/partcomponentdata). |

## Properties

### {{% prop-heading "healthStates" %}}

> **[HealthStateData](/vext/ref/fb/healthstatedata)**[]

### {{% prop-heading "partLinks" %}}

> **[PartLinkData](/vext/ref/fb/partlinkdata)**[]

### {{% prop-heading "isSupported" %}}

> **bool**

### {{% prop-heading "isFragile" %}}

> **bool**

### {{% prop-heading "isNetworkable" %}}

> **bool**

### {{% prop-heading "isWindow" %}}

> **bool**

### {{% prop-heading "animatePhysics" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PartComponentData](/vext/ref/fb/partcomponentdata) type.

