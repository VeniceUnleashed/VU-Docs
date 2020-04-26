---
title: InputActionsData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[InputActionsData](#constructor-0)**() |
| **[InputActionsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[InputActionsData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "nameSid" >}} | string |
| {{< prop "conceptIdentifier" >}} | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) |
| {{< prop "copyKeyBindingFrom" >}} | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) |
| {{< prop "inputActions" >}} | [InputActionData](/vext/ref/fb/inputactiondata)[] |
| {{< prop "hideInKeyBindings" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "InputActionsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### InputActionsData {#constructor-0}

> **InputActionsData**()

Creates a new [InputActionsData](/vext/ref/fb/inputactionsdata) frostbite instance.

### InputActionsData {#constructor-1}

> **InputActionsData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [InputActionsData](/vext/ref/fb/inputactionsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### InputActionsData {#constructor-2}

> **InputActionsData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [InputActionsData](/vext/ref/fb/inputactionsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [InputActionsData](/vext/ref/fb/inputactionsdata). |

## Properties

### {{% prop-heading "nameSid" %}}

> **string**

### {{% prop-heading "conceptIdentifier" %}}

> **[InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers)**

### {{% prop-heading "copyKeyBindingFrom" %}}

> **[InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers)**

### {{% prop-heading "inputActions" %}}

> **[InputActionData](/vext/ref/fb/inputactiondata)**[]

### {{% prop-heading "hideInKeyBindings" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [InputActionsData](/vext/ref/fb/inputactionsdata) type.

