---
title: UrgencySetData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[UrgencySetData](#constructor-0)**() |
| **[UrgencySetData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UrgencySetData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "urgencyModifiers" >}} | [UrgencyModifierData](/vext/ref/fb/urgencymodifierdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UrgencySetData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UrgencySetData {#constructor-0}

> **UrgencySetData**()

Creates a new [UrgencySetData](/vext/ref/fb/urgencysetdata) frostbite instance.

### UrgencySetData {#constructor-1}

> **UrgencySetData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UrgencySetData](/vext/ref/fb/urgencysetdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UrgencySetData {#constructor-2}

> **UrgencySetData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UrgencySetData](/vext/ref/fb/urgencysetdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UrgencySetData](/vext/ref/fb/urgencysetdata). |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "urgencyModifiers" %}}

> **[UrgencyModifierData](/vext/ref/fb/urgencymodifierdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UrgencySetData](/vext/ref/fb/urgencysetdata) type.

