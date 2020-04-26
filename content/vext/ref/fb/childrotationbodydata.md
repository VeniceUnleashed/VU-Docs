---
title: ChildRotationBodyData
---

Inherits from [RotationBodyData](/vext/ref/fb/rotationbodydata)

## Summary

### Constructors

|  |
| --- |
| **[ChildRotationBodyData](#constructor-0)**() |
| **[ChildRotationBodyData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ChildRotationBodyData](#constructor-2)**(other: [RotationBodyData](/vext/ref/fb/rotationbodydata)) |
| **[ChildRotationBodyData](#constructor-3)**(other: [MovingBodyData](/vext/ref/fb/movingbodydata)) |
| **[ChildRotationBodyData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "forceModifier" >}} | float |
| {{< prop "resetForceModifier" >}} | float |
| {{< prop "resetForceInputThreshold" >}} | float |
| {{< prop "rotationInput" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "worldSpaceLockEfficiency" >}} | float |
| {{< prop "useLinearInput" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ChildRotationBodyData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ChildRotationBodyData {#constructor-0}

> **ChildRotationBodyData**()

Creates a new [ChildRotationBodyData](/vext/ref/fb/childrotationbodydata) frostbite instance.

### ChildRotationBodyData {#constructor-1}

> **ChildRotationBodyData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ChildRotationBodyData](/vext/ref/fb/childrotationbodydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ChildRotationBodyData {#constructor-2}

> **ChildRotationBodyData**(other: [RotationBodyData](/vext/ref/fb/rotationbodydata))

Casts an instance of type [RotationBodyData](/vext/ref/fb/rotationbodydata) to [ChildRotationBodyData](/vext/ref/fb/childrotationbodydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [RotationBodyData](/vext/ref/fb/rotationbodydata) | The instance to cast to [ChildRotationBodyData](/vext/ref/fb/childrotationbodydata). |

### ChildRotationBodyData {#constructor-3}

> **ChildRotationBodyData**(other: [MovingBodyData](/vext/ref/fb/movingbodydata))

Casts an instance of type [MovingBodyData](/vext/ref/fb/movingbodydata) to [ChildRotationBodyData](/vext/ref/fb/childrotationbodydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MovingBodyData](/vext/ref/fb/movingbodydata) | The instance to cast to [ChildRotationBodyData](/vext/ref/fb/childrotationbodydata). |

### ChildRotationBodyData {#constructor-4}

> **ChildRotationBodyData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ChildRotationBodyData](/vext/ref/fb/childrotationbodydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ChildRotationBodyData](/vext/ref/fb/childrotationbodydata). |

## Properties

### {{% prop-heading "forceModifier" %}}

> **float**

### {{% prop-heading "resetForceModifier" %}}

> **float**

### {{% prop-heading "resetForceInputThreshold" %}}

> **float**

### {{% prop-heading "rotationInput" %}}

> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "worldSpaceLockEfficiency" %}}

> **float**

### {{% prop-heading "useLinearInput" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ChildRotationBodyData](/vext/ref/fb/childrotationbodydata) type.

