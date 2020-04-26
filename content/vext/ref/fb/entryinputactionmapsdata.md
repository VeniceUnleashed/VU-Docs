---
title: EntryInputActionMapsData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[EntryInputActionMapsData](#constructor-0)**() |
| **[EntryInputActionMapsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EntryInputActionMapsData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[EntryInputActionMapsData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "actionMapSettingsScheme" >}} | int |
| {{< prop "defaultInputActionMap" >}} | [InputActionMapSlot](/vext/ref/fb/inputactionmapslot) |
| {{< prop "inputActionMaps" >}} | [EntryInputActionMapData](/vext/ref/fb/entryinputactionmapdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EntryInputActionMapsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EntryInputActionMapsData {#constructor-0}

> **EntryInputActionMapsData**()

Creates a new [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata) frostbite instance.

### EntryInputActionMapsData {#constructor-1}

> **EntryInputActionMapsData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EntryInputActionMapsData {#constructor-2}

> **EntryInputActionMapsData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata). |

### EntryInputActionMapsData {#constructor-3}

> **EntryInputActionMapsData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata). |

## Properties

### {{% prop-heading "actionMapSettingsScheme" %}}

> **int**

### {{% prop-heading "defaultInputActionMap" %}}

> **[InputActionMapSlot](/vext/ref/fb/inputactionmapslot)**

### {{% prop-heading "inputActionMaps" %}}

> **[EntryInputActionMapData](/vext/ref/fb/entryinputactionmapdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata) type.

