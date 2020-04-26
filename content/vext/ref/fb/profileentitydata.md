---
title: ProfileEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[ProfileEntityData](#constructor-0)**() |
| **[ProfileEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ProfileEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[ProfileEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ProfileEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ProfileEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "profileName" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ProfileEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ProfileEntityData {#constructor-0}

> **ProfileEntityData**()

Creates a new [ProfileEntityData](/vext/ref/fb/profileentitydata) frostbite instance.

### ProfileEntityData {#constructor-1}

> **ProfileEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ProfileEntityData](/vext/ref/fb/profileentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ProfileEntityData {#constructor-2}

> **ProfileEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [ProfileEntityData](/vext/ref/fb/profileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [ProfileEntityData](/vext/ref/fb/profileentitydata). |

### ProfileEntityData {#constructor-3}

> **ProfileEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ProfileEntityData](/vext/ref/fb/profileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ProfileEntityData](/vext/ref/fb/profileentitydata). |

### ProfileEntityData {#constructor-4}

> **ProfileEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ProfileEntityData](/vext/ref/fb/profileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ProfileEntityData](/vext/ref/fb/profileentitydata). |

### ProfileEntityData {#constructor-5}

> **ProfileEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ProfileEntityData](/vext/ref/fb/profileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ProfileEntityData](/vext/ref/fb/profileentitydata). |

## Properties

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "profileName" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ProfileEntityData](/vext/ref/fb/profileentitydata) type.

