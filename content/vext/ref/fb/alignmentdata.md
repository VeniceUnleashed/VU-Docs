---
title: AlignmentData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[AlignmentData](#constructor-0)**() |
| **[AlignmentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AlignmentData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "alignAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "stopTolerance" >}} | float |
| {{< prop "speed" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AlignmentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AlignmentData {#constructor-0}

> **AlignmentData**()

Creates a new [AlignmentData](/vext/ref/fb/alignmentdata) frostbite instance.

### AlignmentData {#constructor-1}

> **AlignmentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AlignmentData](/vext/ref/fb/alignmentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AlignmentData {#constructor-2}

> **AlignmentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AlignmentData](/vext/ref/fb/alignmentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AlignmentData](/vext/ref/fb/alignmentdata). |

## Properties

### {{% prop-heading "alignAction" %}}

> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "stopTolerance" %}}

> **float**

### {{% prop-heading "speed" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AlignmentData](/vext/ref/fb/alignmentdata) type.

