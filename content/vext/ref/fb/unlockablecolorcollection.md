---
title: UnlockableColorCollection
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[UnlockableColorCollection](#constructor-0)**() |
| **[UnlockableColorCollection](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UnlockableColorCollection](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "defaultValue" >}} | [ColorReference](/vext/ref/fb/colorreference) \| nil |
| {{< prop "possibleValues" >}} | [ColorUnlockPartData](/vext/ref/fb/colorunlockpartdata)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UnlockableColorCollection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UnlockableColorCollection {#constructor-0}
> **UnlockableColorCollection**()

Creates a new [UnlockableColorCollection](/vext/ref/fb/unlockablecolorcollection) frostbite instance.

### UnlockableColorCollection {#constructor-1}
> **UnlockableColorCollection**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UnlockableColorCollection](/vext/ref/fb/unlockablecolorcollection) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UnlockableColorCollection {#constructor-2}
> **UnlockableColorCollection**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UnlockableColorCollection](/vext/ref/fb/unlockablecolorcollection). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UnlockableColorCollection](/vext/ref/fb/unlockablecolorcollection). |

## Properties
### {{% prop-heading "defaultValue" %}}
> **[ColorReference](/vext/ref/fb/colorreference)** | **nil**

### {{% prop-heading "possibleValues" %}}
> **[ColorUnlockPartData](/vext/ref/fb/colorunlockpartdata)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UnlockableColorCollection](/vext/ref/fb/unlockablecolorcollection) type.

