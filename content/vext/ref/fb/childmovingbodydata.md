---
title: ChildMovingBodyData
---

Inherits from [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata)

## Summary

### Constructors

|  |
| --- |
| **[ChildMovingBodyData](#constructor-0)**() |
| **[ChildMovingBodyData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ChildMovingBodyData](#constructor-2)**(other: [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata)) |
| **[ChildMovingBodyData](#constructor-3)**(other: [MovingBodyData](/vext/ref/fb/movingbodydata)) |
| **[ChildMovingBodyData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inputDelay" >}} | float |
| {{< prop "speed" >}} | float |
| {{< prop "inputAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "triggerImpulse" >}} | float |
| {{< prop "isOneShotInput" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ChildMovingBodyData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ChildMovingBodyData {#constructor-0}

> **ChildMovingBodyData**()

Creates a new [ChildMovingBodyData](/vext/ref/fb/childmovingbodydata) frostbite instance.

### ChildMovingBodyData {#constructor-1}

> **ChildMovingBodyData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ChildMovingBodyData](/vext/ref/fb/childmovingbodydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ChildMovingBodyData {#constructor-2}

> **ChildMovingBodyData**(other: [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata))

Casts an instance of type [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata) to [ChildMovingBodyData](/vext/ref/fb/childmovingbodydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata) | The instance to cast to [ChildMovingBodyData](/vext/ref/fb/childmovingbodydata). |

### ChildMovingBodyData {#constructor-3}

> **ChildMovingBodyData**(other: [MovingBodyData](/vext/ref/fb/movingbodydata))

Casts an instance of type [MovingBodyData](/vext/ref/fb/movingbodydata) to [ChildMovingBodyData](/vext/ref/fb/childmovingbodydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MovingBodyData](/vext/ref/fb/movingbodydata) | The instance to cast to [ChildMovingBodyData](/vext/ref/fb/childmovingbodydata). |

### ChildMovingBodyData {#constructor-4}

> **ChildMovingBodyData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ChildMovingBodyData](/vext/ref/fb/childmovingbodydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ChildMovingBodyData](/vext/ref/fb/childmovingbodydata). |

## Properties

### {{% prop-heading "inputDelay" %}}

> **float**

### {{% prop-heading "speed" %}}

> **float**

### {{% prop-heading "inputAction" %}}

> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "triggerImpulse" %}}

> **float**

### {{% prop-heading "isOneShotInput" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ChildMovingBodyData](/vext/ref/fb/childmovingbodydata) type.

