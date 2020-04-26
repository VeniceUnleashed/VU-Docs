---
title: StanceFilterComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[StanceFilterComponentData](#constructor-0)**() |
| **[StanceFilterComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[StanceFilterComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[StanceFilterComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[StanceFilterComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[StanceFilterComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "validStances" >}} | int[] |
| {{< prop "stanceChangeTime" >}} | float |
| {{< prop "actionsToFilter" >}} | [ActionSuppressor](/vext/ref/fb/actionsuppressor)[] |
| {{< prop "filterSpecificActions" >}} | bool |
| {{< prop "undoParentStanceFilter" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StanceFilterComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StanceFilterComponentData {#constructor-0}

> **StanceFilterComponentData**()

Creates a new [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata) frostbite instance.

### StanceFilterComponentData {#constructor-1}

> **StanceFilterComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### StanceFilterComponentData {#constructor-2}

> **StanceFilterComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata). |

### StanceFilterComponentData {#constructor-3}

> **StanceFilterComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata). |

### StanceFilterComponentData {#constructor-4}

> **StanceFilterComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata). |

### StanceFilterComponentData {#constructor-5}

> **StanceFilterComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata). |

## Properties

### {{% prop-heading "validStances" %}}

> **int**[]

### {{% prop-heading "stanceChangeTime" %}}

> **float**

### {{% prop-heading "actionsToFilter" %}}

> **[ActionSuppressor](/vext/ref/fb/actionsuppressor)**[]

### {{% prop-heading "filterSpecificActions" %}}

> **bool**

### {{% prop-heading "undoParentStanceFilter" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata) type.

