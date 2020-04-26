---
title: EntityTransformData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[EntityTransformData](#constructor-0)**() |
| **[EntityTransformData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EntityTransformData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "entityTransforms" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EntityTransformData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EntityTransformData {#constructor-0}
> **EntityTransformData**()

Creates a new [EntityTransformData](/vext/ref/fb/entitytransformdata) frostbite instance.

### EntityTransformData {#constructor-1}
> **EntityTransformData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EntityTransformData](/vext/ref/fb/entitytransformdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EntityTransformData {#constructor-2}
> **EntityTransformData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntityTransformData](/vext/ref/fb/entitytransformdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EntityTransformData](/vext/ref/fb/entitytransformdata). |

## Properties
### {{% prop-heading "entityTransforms" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EntityTransformData](/vext/ref/fb/entitytransformdata) type.

