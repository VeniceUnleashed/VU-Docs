---
title: PlayerData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[PlayerData](#constructor-0)**() |
| **[PlayerData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PlayerData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[PlayerData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "playerView" >}} | [PlayerViewData](/vext/ref/fb/playerviewdata) \| nil |
| {{< prop "inputConceptDefinition" >}} | [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata) \| nil |
| {{< prop "inputMapping" >}} | [InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PlayerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PlayerData {#constructor-0}

> **PlayerData**()

Creates a new [PlayerData](/vext/ref/fb/playerdata) frostbite instance.

### PlayerData {#constructor-1}

> **PlayerData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PlayerData](/vext/ref/fb/playerdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PlayerData {#constructor-2}

> **PlayerData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [PlayerData](/vext/ref/fb/playerdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [PlayerData](/vext/ref/fb/playerdata). |

### PlayerData {#constructor-3}

> **PlayerData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PlayerData](/vext/ref/fb/playerdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PlayerData](/vext/ref/fb/playerdata). |

## Properties

### {{% prop-heading "playerView" %}}

> **[PlayerViewData](/vext/ref/fb/playerviewdata)** \| **nil**

### {{% prop-heading "inputConceptDefinition" %}}

> **[EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata)** \| **nil**

### {{% prop-heading "inputMapping" %}}

> **[InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PlayerData](/vext/ref/fb/playerdata) type.

