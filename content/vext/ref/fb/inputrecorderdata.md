---
title: InputRecorderData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[InputRecorderData](#constructor-0)**() |
| **[InputRecorderData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[InputRecorderData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "fileNamePrefix" >}} | string |
| {{< prop "fileName" >}} | string |
| {{< prop "toggleRecordAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "autoIncrementFileName" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "InputRecorderData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### InputRecorderData {#constructor-0}

> **InputRecorderData**()

Creates a new [InputRecorderData](/vext/ref/fb/inputrecorderdata) frostbite instance.

### InputRecorderData {#constructor-1}

> **InputRecorderData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [InputRecorderData](/vext/ref/fb/inputrecorderdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### InputRecorderData {#constructor-2}

> **InputRecorderData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [InputRecorderData](/vext/ref/fb/inputrecorderdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [InputRecorderData](/vext/ref/fb/inputrecorderdata). |

## Properties

### {{% prop-heading "fileNamePrefix" %}}

> **string**

### {{% prop-heading "fileName" %}}

> **string**

### {{% prop-heading "toggleRecordAction" %}}

> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "autoIncrementFileName" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [InputRecorderData](/vext/ref/fb/inputrecorderdata) type.

