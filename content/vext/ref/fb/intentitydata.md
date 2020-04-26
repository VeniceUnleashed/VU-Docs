---
title: IntEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[IntEntityData](#constructor-0)**() |
| **[IntEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[IntEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[IntEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[IntEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[IntEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "defaultValue" >}} | int |
| {{< prop "incDecValue" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "IntEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### IntEntityData {#constructor-0}

> **IntEntityData**()

Creates a new [IntEntityData](/vext/ref/fb/intentitydata) frostbite instance.

### IntEntityData {#constructor-1}

> **IntEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [IntEntityData](/vext/ref/fb/intentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### IntEntityData {#constructor-2}

> **IntEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [IntEntityData](/vext/ref/fb/intentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [IntEntityData](/vext/ref/fb/intentitydata). |

### IntEntityData {#constructor-3}

> **IntEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [IntEntityData](/vext/ref/fb/intentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [IntEntityData](/vext/ref/fb/intentitydata). |

### IntEntityData {#constructor-4}

> **IntEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [IntEntityData](/vext/ref/fb/intentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [IntEntityData](/vext/ref/fb/intentitydata). |

### IntEntityData {#constructor-5}

> **IntEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [IntEntityData](/vext/ref/fb/intentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [IntEntityData](/vext/ref/fb/intentitydata). |

## Properties

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "defaultValue" %}}

> **int**

### {{% prop-heading "incDecValue" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [IntEntityData](/vext/ref/fb/intentitydata) type.

