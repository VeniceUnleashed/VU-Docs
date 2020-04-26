---
title: UIGraphEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[UIGraphEntityData](#constructor-0)**() |
| **[UIGraphEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIGraphEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[UIGraphEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[UIGraphEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[UIGraphEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "events" >}} | [EventSpec](/vext/ref/fb/eventspec)[] |
| {{< prop "graphAsset" >}} | [UIGraphAsset](/vext/ref/fb/uigraphasset) \| nil |
| {{< prop "graphPriority" >}} | [UIGraphPriority](/vext/ref/fb/uigraphpriority) |
| {{< prop "state" >}} | [UIState](/vext/ref/fb/uistate) |
| {{< prop "popPreviousGraph" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIGraphEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIGraphEntityData {#constructor-0}

> **UIGraphEntityData**()

Creates a new [UIGraphEntityData](/vext/ref/fb/uigraphentitydata) frostbite instance.

### UIGraphEntityData {#constructor-1}

> **UIGraphEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIGraphEntityData](/vext/ref/fb/uigraphentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIGraphEntityData {#constructor-2}

> **UIGraphEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [UIGraphEntityData](/vext/ref/fb/uigraphentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [UIGraphEntityData](/vext/ref/fb/uigraphentitydata). |

### UIGraphEntityData {#constructor-3}

> **UIGraphEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [UIGraphEntityData](/vext/ref/fb/uigraphentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [UIGraphEntityData](/vext/ref/fb/uigraphentitydata). |

### UIGraphEntityData {#constructor-4}

> **UIGraphEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [UIGraphEntityData](/vext/ref/fb/uigraphentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [UIGraphEntityData](/vext/ref/fb/uigraphentitydata). |

### UIGraphEntityData {#constructor-5}

> **UIGraphEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIGraphEntityData](/vext/ref/fb/uigraphentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIGraphEntityData](/vext/ref/fb/uigraphentitydata). |

## Properties

### {{% prop-heading "events" %}}

> **[EventSpec](/vext/ref/fb/eventspec)**[]

### {{% prop-heading "graphAsset" %}}

> **[UIGraphAsset](/vext/ref/fb/uigraphasset)** \| **nil**

### {{% prop-heading "graphPriority" %}}

> **[UIGraphPriority](/vext/ref/fb/uigraphpriority)**

### {{% prop-heading "state" %}}

> **[UIState](/vext/ref/fb/uistate)**

### {{% prop-heading "popPreviousGraph" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIGraphEntityData](/vext/ref/fb/uigraphentitydata) type.

