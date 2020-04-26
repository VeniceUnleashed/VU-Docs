---
title: EntityRecordingData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[EntityRecordingData](#constructor-0)**() |
| **[EntityRecordingData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EntityRecordingData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "entityGuid" >}} | [Guid](/vext/ref/shared/class/guid) |
| {{< prop "data" >}} | [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EntityRecordingData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EntityRecordingData {#constructor-0}
> **EntityRecordingData**()

Creates a new [EntityRecordingData](/vext/ref/fb/entityrecordingdata) frostbite instance.

### EntityRecordingData {#constructor-1}
> **EntityRecordingData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EntityRecordingData](/vext/ref/fb/entityrecordingdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EntityRecordingData {#constructor-2}
> **EntityRecordingData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntityRecordingData](/vext/ref/fb/entityrecordingdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EntityRecordingData](/vext/ref/fb/entityrecordingdata). |

## Properties
### {{% prop-heading "entityGuid" %}}
> **[Guid](/vext/ref/shared/class/guid)**

### {{% prop-heading "data" %}}
> **[PropertyRecordingData](/vext/ref/fb/propertyrecordingdata)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EntityRecordingData](/vext/ref/fb/entityrecordingdata) type.

