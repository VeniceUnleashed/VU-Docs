---
title: SoldierMovementSequenceData
---

Inherits from [MovementActionData](/vext/ref/fb/movementactiondata)

## Summary

### Constructors

|  |
| --- |
| **[SoldierMovementSequenceData](#constructor-0)**() |
| **[SoldierMovementSequenceData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoldierMovementSequenceData](#constructor-2)**(other: [MovementActionData](/vext/ref/fb/movementactiondata)) |
| **[SoldierMovementSequenceData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "recordedInput" >}} | [RecordedInputData](/vext/ref/fb/recordedinputdata) \| nil |
| {{< prop "inputRecordingIndex" >}} | int |
| {{< prop "ignoreRecordingIndexFilter" >}} | bool |
| {{< prop "reportWhenFinished" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierMovementSequenceData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierMovementSequenceData {#constructor-0}

> **SoldierMovementSequenceData**()

Creates a new [SoldierMovementSequenceData](/vext/ref/fb/soldiermovementsequencedata) frostbite instance.

### SoldierMovementSequenceData {#constructor-1}

> **SoldierMovementSequenceData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierMovementSequenceData](/vext/ref/fb/soldiermovementsequencedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoldierMovementSequenceData {#constructor-2}

> **SoldierMovementSequenceData**(other: [MovementActionData](/vext/ref/fb/movementactiondata))

Casts an instance of type [MovementActionData](/vext/ref/fb/movementactiondata) to [SoldierMovementSequenceData](/vext/ref/fb/soldiermovementsequencedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MovementActionData](/vext/ref/fb/movementactiondata) | The instance to cast to [SoldierMovementSequenceData](/vext/ref/fb/soldiermovementsequencedata). |

### SoldierMovementSequenceData {#constructor-3}

> **SoldierMovementSequenceData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoldierMovementSequenceData](/vext/ref/fb/soldiermovementsequencedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoldierMovementSequenceData](/vext/ref/fb/soldiermovementsequencedata). |

## Properties

### {{% prop-heading "recordedInput" %}}

> **[RecordedInputData](/vext/ref/fb/recordedinputdata)** \| **nil**

### {{% prop-heading "inputRecordingIndex" %}}

> **int**

### {{% prop-heading "ignoreRecordingIndexFilter" %}}

> **bool**

### {{% prop-heading "reportWhenFinished" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierMovementSequenceData](/vext/ref/fb/soldiermovementsequencedata) type.

