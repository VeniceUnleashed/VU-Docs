---
title: PersistenceConsumableMapping
---


## Summary
### Constructors
| |
| ----------- |
| **[PersistenceConsumableMapping](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "group" >}} | [ConsumableGroup](/vext/ref/fb/consumablegroup) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [PersistenceConsumableMapping](/vext/ref/fb/persistenceconsumablemapping) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PersistenceConsumableMapping" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PersistenceConsumableMapping {#constructor-0}
> **PersistenceConsumableMapping**()

Creates a new [PersistenceConsumableMapping](/vext/ref/fb/persistenceconsumablemapping) frostbite structure.

## Properties
### {{% prop-heading "group" %}}
> **[ConsumableGroup](/vext/ref/fb/consumablegroup)**

## Methods
### Clone
> **Clone**(): [PersistenceConsumableMapping](/vext/ref/fb/persistenceconsumablemapping)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[PersistenceConsumableMapping](/vext/ref/fb/persistenceconsumablemapping)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PersistenceConsumableMapping](/vext/ref/fb/persistenceconsumablemapping) type.

