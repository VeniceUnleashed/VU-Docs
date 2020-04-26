---
title: RandomMultiEventEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[RandomMultiEventEntityData](#constructor-0)**() |
| **[RandomMultiEventEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[RandomMultiEventEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[RandomMultiEventEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[RandomMultiEventEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[RandomMultiEventEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "randomEventWeight" >}} | float[] |
| {{< prop "uniformDistribution" >}} | bool |
| {{< prop "resetOutputsWhenAllHasTriggered" >}} | bool |
| {{< prop "disableOutputOnTrigger" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RandomMultiEventEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RandomMultiEventEntityData {#constructor-0}

> **RandomMultiEventEntityData**()

Creates a new [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata) frostbite instance.

### RandomMultiEventEntityData {#constructor-1}

> **RandomMultiEventEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### RandomMultiEventEntityData {#constructor-2}

> **RandomMultiEventEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata). |

### RandomMultiEventEntityData {#constructor-3}

> **RandomMultiEventEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata). |

### RandomMultiEventEntityData {#constructor-4}

> **RandomMultiEventEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata). |

### RandomMultiEventEntityData {#constructor-5}

> **RandomMultiEventEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata). |

## Properties

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "randomEventWeight" %}}

> **float**[]

### {{% prop-heading "uniformDistribution" %}}

> **bool**

### {{% prop-heading "resetOutputsWhenAllHasTriggered" %}}

> **bool**

### {{% prop-heading "disableOutputOnTrigger" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata) type.

