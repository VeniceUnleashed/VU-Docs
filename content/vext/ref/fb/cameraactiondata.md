---
title: CameraActionData
---

Inherits from [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata)

## Summary

### Constructors

|  |
| --- |
| **[CameraActionData](#constructor-0)**() |
| **[CameraActionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CameraActionData](#constructor-2)**(other: [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata)) |
| **[CameraActionData](#constructor-3)**(other: [MovementActionData](/vext/ref/fb/movementactiondata)) |
| **[CameraActionData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "actionMode" >}} | [CameraMovementActionMode](/vext/ref/fb/cameramovementactionmode) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CameraActionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CameraActionData {#constructor-0}

> **CameraActionData**()

Creates a new [CameraActionData](/vext/ref/fb/cameraactiondata) frostbite instance.

### CameraActionData {#constructor-1}

> **CameraActionData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CameraActionData](/vext/ref/fb/cameraactiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CameraActionData {#constructor-2}

> **CameraActionData**(other: [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata))

Casts an instance of type [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata) to [CameraActionData](/vext/ref/fb/cameraactiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata) | The instance to cast to [CameraActionData](/vext/ref/fb/cameraactiondata). |

### CameraActionData {#constructor-3}

> **CameraActionData**(other: [MovementActionData](/vext/ref/fb/movementactiondata))

Casts an instance of type [MovementActionData](/vext/ref/fb/movementactiondata) to [CameraActionData](/vext/ref/fb/cameraactiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MovementActionData](/vext/ref/fb/movementactiondata) | The instance to cast to [CameraActionData](/vext/ref/fb/cameraactiondata). |

### CameraActionData {#constructor-4}

> **CameraActionData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CameraActionData](/vext/ref/fb/cameraactiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CameraActionData](/vext/ref/fb/cameraactiondata). |

## Properties

### {{% prop-heading "actionMode" %}}

> **[CameraMovementActionMode](/vext/ref/fb/cameramovementactionmode)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CameraActionData](/vext/ref/fb/cameraactiondata) type.

