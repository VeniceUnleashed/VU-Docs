---
title: SoundTestSpec
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[SoundTestSpec](#constructor-0)**() |
| **[SoundTestSpec](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundTestSpec](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "description" >}} | string |
| {{< prop "mainStartTask" >}} | [SoundTestTask](/vext/ref/fb/soundtesttask) \| nil |
| {{< prop "mainStopTask" >}} | [SoundTestTask](/vext/ref/fb/soundtesttask) \| nil |
| {{< prop "duration" >}} | float |
| {{< prop "tasks" >}} | [SoundTestTask](/vext/ref/fb/soundtesttask)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundTestSpec" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundTestSpec {#constructor-0}
> **SoundTestSpec**()

Creates a new [SoundTestSpec](/vext/ref/fb/soundtestspec) frostbite instance.

### SoundTestSpec {#constructor-1}
> **SoundTestSpec**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundTestSpec](/vext/ref/fb/soundtestspec) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundTestSpec {#constructor-2}
> **SoundTestSpec**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundTestSpec](/vext/ref/fb/soundtestspec). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundTestSpec](/vext/ref/fb/soundtestspec). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "description" %}}
> **string**

### {{% prop-heading "mainStartTask" %}}
> **[SoundTestTask](/vext/ref/fb/soundtesttask)** | **nil**

### {{% prop-heading "mainStopTask" %}}
> **[SoundTestTask](/vext/ref/fb/soundtesttask)** | **nil**

### {{% prop-heading "duration" %}}
> **float**

### {{% prop-heading "tasks" %}}
> **[SoundTestTask](/vext/ref/fb/soundtesttask)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundTestSpec](/vext/ref/fb/soundtestspec) type.

