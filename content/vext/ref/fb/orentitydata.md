---
title: OrEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[OrEntityData](#constructor-0)**() |
| **[OrEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[OrEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[OrEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[OrEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[OrEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "in1" >}} | bool |
| {{< prop "in2" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "OrEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### OrEntityData {#constructor-0}

> **OrEntityData**()

Creates a new [OrEntityData](/vext/ref/fb/orentitydata) frostbite instance.

### OrEntityData {#constructor-1}

> **OrEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [OrEntityData](/vext/ref/fb/orentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### OrEntityData {#constructor-2}

> **OrEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [OrEntityData](/vext/ref/fb/orentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [OrEntityData](/vext/ref/fb/orentitydata). |

### OrEntityData {#constructor-3}

> **OrEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [OrEntityData](/vext/ref/fb/orentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [OrEntityData](/vext/ref/fb/orentitydata). |

### OrEntityData {#constructor-4}

> **OrEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [OrEntityData](/vext/ref/fb/orentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [OrEntityData](/vext/ref/fb/orentitydata). |

### OrEntityData {#constructor-5}

> **OrEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [OrEntityData](/vext/ref/fb/orentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [OrEntityData](/vext/ref/fb/orentitydata). |

## Properties

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "in1" %}}

> **bool**

### {{% prop-heading "in2" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [OrEntityData](/vext/ref/fb/orentitydata) type.

