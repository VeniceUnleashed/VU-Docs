---
title: SoundTestTask
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[SoundTestTask](#constructor-0)**() |
| **[SoundTestTask](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundTestTask](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "spec" >}} | [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec) \| nil |
| {{< prop "param" >}} | [SoundTestTaskParam](/vext/ref/fb/soundtesttaskparam) \| nil |
| {{< prop "startTime" >}} | float |
| {{< prop "repetitions" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundTestTask" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundTestTask {#constructor-0}
> **SoundTestTask**()

Creates a new [SoundTestTask](/vext/ref/fb/soundtesttask) frostbite instance.

### SoundTestTask {#constructor-1}
> **SoundTestTask**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundTestTask](/vext/ref/fb/soundtesttask) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundTestTask {#constructor-2}
> **SoundTestTask**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundTestTask](/vext/ref/fb/soundtesttask). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundTestTask](/vext/ref/fb/soundtesttask). |

## Properties
### {{% prop-heading "spec" %}}
> **[SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec)** | **nil**

### {{% prop-heading "param" %}}
> **[SoundTestTaskParam](/vext/ref/fb/soundtesttaskparam)** | **nil**

### {{% prop-heading "startTime" %}}
> **float**

### {{% prop-heading "repetitions" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundTestTask](/vext/ref/fb/soundtesttask) type.

