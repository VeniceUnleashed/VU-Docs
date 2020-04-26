---
title: UrgencyUserData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[UrgencyUserData](#constructor-0)**() |
| **[UrgencyUserData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UrgencyUserData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "base" >}} | [UrgencyUserData](/vext/ref/fb/urgencyuserdata) \| nil |
| {{< prop "urgencyModifiers" >}} | [UrgencyModifierData](/vext/ref/fb/urgencymodifierdata)[] |
| {{< prop "modifierSets" >}} | [UrgencySetData](/vext/ref/fb/urgencysetdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UrgencyUserData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UrgencyUserData {#constructor-0}

> **UrgencyUserData**()

Creates a new [UrgencyUserData](/vext/ref/fb/urgencyuserdata) frostbite instance.

### UrgencyUserData {#constructor-1}

> **UrgencyUserData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UrgencyUserData](/vext/ref/fb/urgencyuserdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UrgencyUserData {#constructor-2}

> **UrgencyUserData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UrgencyUserData](/vext/ref/fb/urgencyuserdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UrgencyUserData](/vext/ref/fb/urgencyuserdata). |

## Properties

### {{% prop-heading "base" %}}

> **[UrgencyUserData](/vext/ref/fb/urgencyuserdata)** \| **nil**

### {{% prop-heading "urgencyModifiers" %}}

> **[UrgencyModifierData](/vext/ref/fb/urgencymodifierdata)**[]

### {{% prop-heading "modifierSets" %}}

> **[UrgencySetData](/vext/ref/fb/urgencysetdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UrgencyUserData](/vext/ref/fb/urgencyuserdata) type.

