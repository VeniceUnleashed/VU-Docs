---
title: RandomEventEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[RandomEventEntityData](#constructor-0)**() |
| **[RandomEventEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[RandomEventEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[RandomEventEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[RandomEventEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[RandomEventEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "probability" >}} | int |
| {{< prop "randomizeFirstOnly" >}} | bool |
| {{< prop "autoStart" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RandomEventEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RandomEventEntityData {#constructor-0}

> **RandomEventEntityData**()

Creates a new [RandomEventEntityData](/vext/ref/fb/randomevententitydata) frostbite instance.

### RandomEventEntityData {#constructor-1}

> **RandomEventEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RandomEventEntityData](/vext/ref/fb/randomevententitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### RandomEventEntityData {#constructor-2}

> **RandomEventEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [RandomEventEntityData](/vext/ref/fb/randomevententitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [RandomEventEntityData](/vext/ref/fb/randomevententitydata). |

### RandomEventEntityData {#constructor-3}

> **RandomEventEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [RandomEventEntityData](/vext/ref/fb/randomevententitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [RandomEventEntityData](/vext/ref/fb/randomevententitydata). |

### RandomEventEntityData {#constructor-4}

> **RandomEventEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [RandomEventEntityData](/vext/ref/fb/randomevententitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [RandomEventEntityData](/vext/ref/fb/randomevententitydata). |

### RandomEventEntityData {#constructor-5}

> **RandomEventEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [RandomEventEntityData](/vext/ref/fb/randomevententitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [RandomEventEntityData](/vext/ref/fb/randomevententitydata). |

## Properties

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "probability" %}}

> **int**

### {{% prop-heading "randomizeFirstOnly" %}}

> **bool**

### {{% prop-heading "autoStart" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RandomEventEntityData](/vext/ref/fb/randomevententitydata) type.

