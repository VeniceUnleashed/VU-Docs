---
title: EntryInputActionMappingData
---

Inherits from [InputActionMappingData](/vext/ref/fb/inputactionmappingdata)

## Summary

### Constructors

|  |
| --- |
| **[EntryInputActionMappingData](#constructor-0)**() |
| **[EntryInputActionMappingData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EntryInputActionMappingData](#constructor-2)**(other: [InputActionMappingData](/vext/ref/fb/inputactionmappingdata)) |
| **[EntryInputActionMappingData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "actionIdentifier" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "conceptIdentifier" >}} | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EntryInputActionMappingData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EntryInputActionMappingData {#constructor-0}

> **EntryInputActionMappingData**()

Creates a new [EntryInputActionMappingData](/vext/ref/fb/entryinputactionmappingdata) frostbite instance.

### EntryInputActionMappingData {#constructor-1}

> **EntryInputActionMappingData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EntryInputActionMappingData](/vext/ref/fb/entryinputactionmappingdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EntryInputActionMappingData {#constructor-2}

> **EntryInputActionMappingData**(other: [InputActionMappingData](/vext/ref/fb/inputactionmappingdata))

Casts an instance of type [InputActionMappingData](/vext/ref/fb/inputactionmappingdata) to [EntryInputActionMappingData](/vext/ref/fb/entryinputactionmappingdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [InputActionMappingData](/vext/ref/fb/inputactionmappingdata) | The instance to cast to [EntryInputActionMappingData](/vext/ref/fb/entryinputactionmappingdata). |

### EntryInputActionMappingData {#constructor-3}

> **EntryInputActionMappingData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EntryInputActionMappingData](/vext/ref/fb/entryinputactionmappingdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EntryInputActionMappingData](/vext/ref/fb/entryinputactionmappingdata). |

## Properties

### {{% prop-heading "actionIdentifier" %}}

> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "conceptIdentifier" %}}

> **[InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EntryInputActionMappingData](/vext/ref/fb/entryinputactionmappingdata) type.

